<?php
declare(strict_types=1);

// Ctp SDK exists test

require_once __DIR__ . '/../ctp_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = CtpSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
