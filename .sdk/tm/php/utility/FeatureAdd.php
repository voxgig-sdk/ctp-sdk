<?php
declare(strict_types=1);

// Ctp SDK utility: feature_add

class CtpFeatureAdd
{
    public static function call(CtpContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
