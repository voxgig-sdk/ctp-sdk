// Typed models for the Ctp SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface JsonApi {
  url?: string
  urn?: string
}

export interface JsonApiLoadMatch {
  if?: string
  urn: string
}

export interface Plugin {
  id?: string
}

export interface PluginLoadMatch {
  id: string
}

export interface PluginApi {
}

export interface PluginApiLoadMatch {
  if?: string
  installplugin: string
  return?: string
}

