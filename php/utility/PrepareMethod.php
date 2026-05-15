<?php
declare(strict_types=1);

// Ctp SDK utility: prepare_method

class CtpPrepareMethod
{
    private const METHOD_MAP = [
        'create' => 'POST',
        'update' => 'PUT',
        'load' => 'GET',
        'list' => 'GET',
        'remove' => 'DELETE',
        'patch' => 'PATCH',
    ];

    public static function call(CtpContext $ctx): string
    {
        return self::METHOD_MAP[$ctx->op->name] ?? 'GET';
    }
}
