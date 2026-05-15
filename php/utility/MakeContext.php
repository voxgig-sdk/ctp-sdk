<?php
declare(strict_types=1);

// Ctp SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CtpMakeContext
{
    public static function call(array $ctxmap, ?CtpContext $basectx): CtpContext
    {
        return new CtpContext($ctxmap, $basectx);
    }
}
