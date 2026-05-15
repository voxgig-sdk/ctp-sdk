<?php
declare(strict_types=1);

// Ctp SDK utility: prepare_body

class CtpPrepareBody
{
    public static function call(CtpContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
