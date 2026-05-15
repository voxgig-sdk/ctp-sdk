<?php
declare(strict_types=1);

// Ctp SDK utility: result_body

class CtpResultBody
{
    public static function call(CtpContext $ctx): ?CtpResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
