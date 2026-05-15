# Ctp SDK exists test

require "minitest/autorun"
require_relative "../Ctp_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = CtpSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
