<?php
declare(strict_types=1);

// Ctp SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

CtpUtility::setRegistrar(function (CtpUtility $u): void {
    $u->clean = [CtpClean::class, 'call'];
    $u->done = [CtpDone::class, 'call'];
    $u->make_error = [CtpMakeError::class, 'call'];
    $u->feature_add = [CtpFeatureAdd::class, 'call'];
    $u->feature_hook = [CtpFeatureHook::class, 'call'];
    $u->feature_init = [CtpFeatureInit::class, 'call'];
    $u->fetcher = [CtpFetcher::class, 'call'];
    $u->make_fetch_def = [CtpMakeFetchDef::class, 'call'];
    $u->make_context = [CtpMakeContext::class, 'call'];
    $u->make_options = [CtpMakeOptions::class, 'call'];
    $u->make_request = [CtpMakeRequest::class, 'call'];
    $u->make_response = [CtpMakeResponse::class, 'call'];
    $u->make_result = [CtpMakeResult::class, 'call'];
    $u->make_point = [CtpMakePoint::class, 'call'];
    $u->make_spec = [CtpMakeSpec::class, 'call'];
    $u->make_url = [CtpMakeUrl::class, 'call'];
    $u->param = [CtpParam::class, 'call'];
    $u->prepare_auth = [CtpPrepareAuth::class, 'call'];
    $u->prepare_body = [CtpPrepareBody::class, 'call'];
    $u->prepare_headers = [CtpPrepareHeaders::class, 'call'];
    $u->prepare_method = [CtpPrepareMethod::class, 'call'];
    $u->prepare_params = [CtpPrepareParams::class, 'call'];
    $u->prepare_path = [CtpPreparePath::class, 'call'];
    $u->prepare_query = [CtpPrepareQuery::class, 'call'];
    $u->result_basic = [CtpResultBasic::class, 'call'];
    $u->result_body = [CtpResultBody::class, 'call'];
    $u->result_headers = [CtpResultHeaders::class, 'call'];
    $u->transform_request = [CtpTransformRequest::class, 'call'];
    $u->transform_response = [CtpTransformResponse::class, 'call'];
});
