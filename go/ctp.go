package voxgigctpsdk

import (
	"github.com/voxgig-sdk/ctp-sdk/go/core"
	"github.com/voxgig-sdk/ctp-sdk/go/entity"
	"github.com/voxgig-sdk/ctp-sdk/go/feature"
	_ "github.com/voxgig-sdk/ctp-sdk/go/utility"
)

// Type aliases preserve external API.
type CtpSDK = core.CtpSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CtpEntity = core.CtpEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CtpError = core.CtpError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewJsonApiEntityFunc = func(client *core.CtpSDK, entopts map[string]any) core.CtpEntity {
		return entity.NewJsonApiEntity(client, entopts)
	}
	core.NewPluginEntityFunc = func(client *core.CtpSDK, entopts map[string]any) core.CtpEntity {
		return entity.NewPluginEntity(client, entopts)
	}
	core.NewPluginApiEntityFunc = func(client *core.CtpSDK, entopts map[string]any) core.CtpEntity {
		return entity.NewPluginApiEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCtpSDK = core.NewCtpSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
