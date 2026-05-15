package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewJsonApiEntityFunc func(client *CtpSDK, entopts map[string]any) CtpEntity

var NewPluginEntityFunc func(client *CtpSDK, entopts map[string]any) CtpEntity

var NewPluginApiEntityFunc func(client *CtpSDK, entopts map[string]any) CtpEntity

