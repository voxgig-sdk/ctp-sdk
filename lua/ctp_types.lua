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
---@field url? string
---@field urn? string

---@class Plugin

---@class PluginLoadMatch
---@field id string

---@class PluginApi

---@class PluginApiLoadMatch

local M = {}

return M
