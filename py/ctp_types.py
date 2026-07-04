# Typed models for the Ctp SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class JsonApi:
    url: Optional[str] = None
    urn: Optional[str] = None


@dataclass
class JsonApiLoadMatch:
    url: Optional[str] = None
    urn: Optional[str] = None


@dataclass
class Plugin:
    pass


@dataclass
class PluginLoadMatch:
    id: str


@dataclass
class PluginApi:
    pass


@dataclass
class PluginApiLoadMatch:
    pass

