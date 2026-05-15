# Ctp SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CtpUtility.registrar = ->(u) {
  u.clean = CtpUtilities::Clean
  u.done = CtpUtilities::Done
  u.make_error = CtpUtilities::MakeError
  u.feature_add = CtpUtilities::FeatureAdd
  u.feature_hook = CtpUtilities::FeatureHook
  u.feature_init = CtpUtilities::FeatureInit
  u.fetcher = CtpUtilities::Fetcher
  u.make_fetch_def = CtpUtilities::MakeFetchDef
  u.make_context = CtpUtilities::MakeContext
  u.make_options = CtpUtilities::MakeOptions
  u.make_request = CtpUtilities::MakeRequest
  u.make_response = CtpUtilities::MakeResponse
  u.make_result = CtpUtilities::MakeResult
  u.make_point = CtpUtilities::MakePoint
  u.make_spec = CtpUtilities::MakeSpec
  u.make_url = CtpUtilities::MakeUrl
  u.param = CtpUtilities::Param
  u.prepare_auth = CtpUtilities::PrepareAuth
  u.prepare_body = CtpUtilities::PrepareBody
  u.prepare_headers = CtpUtilities::PrepareHeaders
  u.prepare_method = CtpUtilities::PrepareMethod
  u.prepare_params = CtpUtilities::PrepareParams
  u.prepare_path = CtpUtilities::PreparePath
  u.prepare_query = CtpUtilities::PrepareQuery
  u.result_basic = CtpUtilities::ResultBasic
  u.result_body = CtpUtilities::ResultBody
  u.result_headers = CtpUtilities::ResultHeaders
  u.transform_request = CtpUtilities::TransformRequest
  u.transform_response = CtpUtilities::TransformResponse
}
