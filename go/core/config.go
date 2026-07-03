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
			"auth": map[string]any{
				"prefix": "Bearer",
			},
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
						"active": true,
						"name": "url",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "urn",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
				},
				"name": "json_api",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": "en",
											"kind": "query",
											"name": "if",
											"orig": "if",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "ctp:analects/xue-er",
											"kind": "query",
											"name": "urn",
											"orig": "urn",
											"reqd": true,
											"type": "`$STRING`",
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": 0,
											"kind": "query",
											"name": "redirect",
											"orig": "redirect",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": "ctp:analects/xue-er",
											"kind": "query",
											"name": "urn",
											"orig": "urn",
											"reqd": true,
											"type": "`$STRING`",
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
								"index$": 1,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": "https://ctext.org/analects/xue-er",
											"kind": "query",
											"name": "url",
											"orig": "url",
											"reqd": true,
											"type": "`$STRING`",
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
								"index$": 2,
							},
						},
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
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"active": true,
											"example": "textexport",
											"kind": "param",
											"name": "id",
											"orig": "plugin_id",
											"reqd": true,
											"type": "`$STRING`",
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
								"index$": 0,
							},
						},
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
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": "en",
											"kind": "query",
											"name": "if",
											"orig": "if",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "https://ctext.org/plugins/textexport/plugin.xml",
											"kind": "query",
											"name": "installplugin",
											"orig": "installplugin",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "return",
											"orig": "return",
											"reqd": false,
											"type": "`$STRING`",
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
								"index$": 0,
							},
						},
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
