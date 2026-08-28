-- Typed models for the Ctp SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class JsonApi
---@field url? string
---@field urn? string

---@class JsonApiLoadMatch
---@field if? string
---@field urn string

---@class Plugin
---@field id? string

---@class PluginLoadMatch
---@field id string

---@class PluginApi

---@class PluginApiLoadMatch
---@field if? string
---@field installplugin string
---@field return? string

local M = {}

return M
