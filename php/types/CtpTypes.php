<?php
declare(strict_types=1);

// Typed models for the Ctp SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** JsonApi entity data model. */
class JsonApi
{
    public ?string $url = null;
    public ?string $urn = null;
}

/** Request payload for JsonApi#load. */
class JsonApiLoadMatch
{
    public ?string $url = null;
    public ?string $urn = null;
}

/** Plugin entity data model. */
class Plugin
{
}

/** Request payload for Plugin#load. */
class PluginLoadMatch
{
    public string $id;
}

/** PluginApi entity data model. */
class PluginApi
{
}

/** Request payload for PluginApi#load. */
class PluginApiLoadMatch
{
}

