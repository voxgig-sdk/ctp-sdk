<?php
declare(strict_types=1);

// Ctp SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class CtpFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new CtpBaseFeature();
            case "test":
                return new CtpTestFeature();
            default:
                return new CtpBaseFeature();
        }
    }
}
