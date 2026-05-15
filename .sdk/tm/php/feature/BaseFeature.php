<?php
declare(strict_types=1);

// Ctp SDK base feature

class CtpBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CtpContext $ctx, array $options): void {}
    public function PostConstruct(CtpContext $ctx): void {}
    public function PostConstructEntity(CtpContext $ctx): void {}
    public function SetData(CtpContext $ctx): void {}
    public function GetData(CtpContext $ctx): void {}
    public function GetMatch(CtpContext $ctx): void {}
    public function SetMatch(CtpContext $ctx): void {}
    public function PrePoint(CtpContext $ctx): void {}
    public function PreSpec(CtpContext $ctx): void {}
    public function PreRequest(CtpContext $ctx): void {}
    public function PreResponse(CtpContext $ctx): void {}
    public function PreResult(CtpContext $ctx): void {}
    public function PreDone(CtpContext $ctx): void {}
    public function PreUnexpected(CtpContext $ctx): void {}
}
