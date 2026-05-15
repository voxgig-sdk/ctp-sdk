<?php
declare(strict_types=1);

// Ctp SDK utility: result_headers

class CtpResultHeaders
{
    public static function call(CtpContext $ctx): ?CtpResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
