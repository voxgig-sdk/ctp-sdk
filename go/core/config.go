package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Ctp",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://ctext.org",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"json_api": map[string]any{},
				"plugin": map[string]any{},
				"plugin_api": map[string]any{},
			},
		},
		"entity": map[string]any{
			"json_api": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "url",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "urn",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
				},
				"name": "json_api",
				"op": map[string]any{
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "en",
											"kind": "query",
											"name": "if",
											"orig": "if",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "ctp:analects/xue-er",
											"kind": "query",
											"name": "urn",
											"orig": "urn",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/api/gettext",
								"parts": []any{
									"api",
									"gettext",
								},
								"select": map[string]any{
									"exist": []any{
										"if",
										"urn",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "redirect",
											"orig": "redirect",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"example": "ctp:analects/xue-er",
											"kind": "query",
											"name": "urn",
											"orig": "urn",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/api/getlink",
								"parts": []any{
									"api",
									"getlink",
								},
								"select": map[string]any{
									"exist": []any{
										"redirect",
										"urn",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 1,
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "https://ctext.org/analects/xue-er",
											"kind": "query",
											"name": "url",
											"orig": "url",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/api/readlink",
								"parts": []any{
									"api",
									"readlink",
								},
								"select": map[string]any{
									"exist": []any{
										"url",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 2,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"plugin": map[string]any{
				"fields": []any{},
				"name": "plugin",
				"op": map[string]any{
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "textexport",
											"kind": "param",
											"name": "id",
											"orig": "plugin_id",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/plugins/{pluginId}/plugin.xml",
								"parts": []any{
									"plugins",
									"{id}",
									"plugin.xml",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"pluginId": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"plugin_api": map[string]any{
				"fields": []any{},
				"name": "plugin_api",
				"op": map[string]any{
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "en",
											"kind": "query",
											"name": "if",
											"orig": "if",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "https://ctext.org/plugins/textexport/plugin.xml",
											"kind": "query",
											"name": "installplugin",
											"orig": "installplugin",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "return",
											"orig": "return",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/account.pl",
								"parts": []any{
									"account.pl",
								},
								"select": map[string]any{
									"exist": []any{
										"if",
										"installplugin",
										"return",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
