
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Ctp',
        slug: "ctp",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://ctext.org",

    auth: {
      prefix: '',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      json_api: {
      },

      plugin: {
      },

      plugin_api: {
      },

    }
  }


  entity = {
    "json_api": {
      "fields": [
        {
          "name": "url",
          "short": "Direct URL to the text",
          "type": "`$STRING`"
        },
        {
          "name": "urn",
          "short": "CTP URN for the specified URL",
          "type": "`$STRING`"
        }
      ],
      "name": "json_api",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "en",
                    "kind": "query",
                    "name": "if",
                    "orig": "if",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "ctp:analects/xue-er",
                    "kind": "query",
                    "name": "urn",
                    "orig": "urn",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/gettext",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "gettext"
                }
              ],
              "select": {
                "exist": [
                  "if",
                  "urn"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "gettext"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "example": 0,
                    "kind": "query",
                    "name": "redirect",
                    "orig": "redirect",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "ctp:analects/xue-er",
                    "kind": "query",
                    "name": "urn",
                    "orig": "urn",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/getlink",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "getlink"
                }
              ],
              "select": {
                "exist": [
                  "redirect",
                  "urn"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "getlink"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "example": "https://ctext.org/analects/xue-er",
                    "kind": "query",
                    "name": "url",
                    "orig": "url",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/api/readlink",
              "segments": [
                {
                  "lit": "api"
                },
                {
                  "lit": "readlink"
                }
              ],
              "select": {
                "exist": [
                  "url"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "api",
                "readlink"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "plugin": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "plugin",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "textexport",
                    "kind": "param",
                    "name": "id",
                    "orig": "plugin_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/plugins/{pluginId}/plugin.xml",
              "rename": {
                "param": {
                  "pluginId": "id"
                }
              },
              "segments": [
                {
                  "lit": "plugins"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "plugin.xml"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "plugins",
                "{id}",
                "plugin.xml"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "plugin_api": {
      "fields": [],
      "name": "plugin_api",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "en",
                    "kind": "query",
                    "name": "if",
                    "orig": "if",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "https://ctext.org/plugins/textexport/plugin.xml",
                    "kind": "query",
                    "name": "installplugin",
                    "orig": "installplugin",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "return",
                    "orig": "return",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/account.pl",
              "segments": [
                {
                  "lit": "account.pl"
                }
              ],
              "select": {
                "exist": [
                  "if",
                  "installplugin",
                  "return"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "account.pl"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

