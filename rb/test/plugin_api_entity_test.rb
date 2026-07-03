# PluginApi entity test

require "minitest/autorun"
require "json"
require_relative "../Ctp_sdk"
require_relative "runner"

class PluginApiEntityTest < Minitest::Test
  def test_create_instance
    testsdk = CtpSDK.test(nil, nil)
    ent = testsdk.PluginApi(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = plugin_api_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "plugin_api." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set CTP_TEST_PLUGIN_API_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    plugin_api_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.plugin_api")))
    plugin_api_ref01_data = nil
    if plugin_api_ref01_data_raw.length > 0
      plugin_api_ref01_data = Helpers.to_map(plugin_api_ref01_data_raw[0][1])
    end

    # LOAD
    plugin_api_ref01_ent = client.PluginApi(nil)
    plugin_api_ref01_match_dt0 = {}
    plugin_api_ref01_data_dt0_loaded, err = plugin_api_ref01_ent.load(plugin_api_ref01_match_dt0, nil)
    assert_nil err
    assert !plugin_api_ref01_data_dt0_loaded.nil?

  end
end

def plugin_api_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "plugin_api", "PluginApiTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = CtpSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["plugin_api01", "plugin_api02", "plugin_api03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["CTP_TEST_PLUGIN_API_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "CTP_TEST_PLUGIN_API_ENTID" => idmap,
    "CTP_TEST_LIVE" => "FALSE",
    "CTP_TEST_EXPLAIN" => "FALSE",
    "CTP_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["CTP_TEST_PLUGIN_API_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["CTP_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
        "apikey" => env["CTP_APIKEY"],
      },
      extra || {},
    ])
    client = CtpSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["CTP_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["CTP_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
