-- Ctp SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Ctp",
      slug = "ctp",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://ctext.org",
      auth = {
        prefix = "",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["json_api"] = {},
        ["plugin"] = {},
        ["plugin_api"] = {},
      },
    },
    entity = {
      ["json_api"] = {
        ["fields"] = {
          {
            ["name"] = "url",
            ["short"] = "Direct URL to the text",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "urn",
            ["short"] = "CTP URN for the specified URL",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "json_api",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "en",
                      ["kind"] = "query",
                      ["name"] = "if",
                      ["orig"] = "if",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "ctp:analects/xue-er",
                      ["kind"] = "query",
                      ["name"] = "urn",
                      ["orig"] = "urn",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/gettext",
                ["parts"] = {
                  "api",
                  "gettext",
                },
                ["select"] = {
                  ["exist"] = {
                    "if",
                    "urn",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = 0,
                      ["kind"] = "query",
                      ["name"] = "redirect",
                      ["orig"] = "redirect",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = "ctp:analects/xue-er",
                      ["kind"] = "query",
                      ["name"] = "urn",
                      ["orig"] = "urn",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/getlink",
                ["parts"] = {
                  "api",
                  "getlink",
                },
                ["select"] = {
                  ["exist"] = {
                    "redirect",
                    "urn",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "https://ctext.org/analects/xue-er",
                      ["kind"] = "query",
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/readlink",
                ["parts"] = {
                  "api",
                  "readlink",
                },
                ["select"] = {
                  ["exist"] = {
                    "url",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["plugin"] = {
        ["fields"] = {},
        ["name"] = "plugin",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "textexport",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "plugin_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/plugins/{pluginId}/plugin.xml",
                ["parts"] = {
                  "plugins",
                  "{id}",
                  "plugin.xml",
                },
                ["rename"] = {
                  ["param"] = {
                    ["pluginId"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["plugin_api"] = {
        ["fields"] = {},
        ["name"] = "plugin_api",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "en",
                      ["kind"] = "query",
                      ["name"] = "if",
                      ["orig"] = "if",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "https://ctext.org/plugins/textexport/plugin.xml",
                      ["kind"] = "query",
                      ["name"] = "installplugin",
                      ["orig"] = "installplugin",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "return",
                      ["orig"] = "return",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/account.pl",
                ["parts"] = {
                  "account.pl",
                },
                ["select"] = {
                  ["exist"] = {
                    "if",
                    "installplugin",
                    "return",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
