# frozen_string_literal: true

# Typed models for the Ctp SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# JsonApi entity data model.
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] urn
#   @return [String, nil]
JsonApi = Struct.new(
  :url,
  :urn,
  keyword_init: true
)

# Request payload for JsonApi#load.
#
# @!attribute [rw] if
#   @return [String, nil]
#
# @!attribute [rw] urn
#   @return [String]
JsonApiLoadMatch = Struct.new(
  :if,
  :urn,
  keyword_init: true
)

# Plugin entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Plugin = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Plugin#load.
#
# @!attribute [rw] id
#   @return [String]
PluginLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# PluginApi entity data model.
class PluginApi
end

# Request payload for PluginApi#load.
#
# @!attribute [rw] if
#   @return [String, nil]
#
# @!attribute [rw] installplugin
#   @return [String]
#
# @!attribute [rw] return
#   @return [String, nil]
PluginApiLoadMatch = Struct.new(
  :if,
  :installplugin,
  :return,
  keyword_init: true
)

