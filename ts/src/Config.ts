
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://ctext.org',

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
          "active": true,
          "name": "url",
          "req": false,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "urn",
          "req": false,
          "type": "`$STRING`",
          "index$": 1
        }
      ],
      "name": "json_api",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "example": "en",
                    "kind": "query",
                    "name": "if",
                    "orig": "if",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "ctp:analects/xue-er",
                    "kind": "query",
                    "name": "urn",
                    "orig": "urn",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "method": "GET",
              "orig": "/api/gettext",
              "parts": [
                "api",
                "gettext"
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
              "index$": 0
            },
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "example": 0,
                    "kind": "query",
                    "name": "redirect",
                    "orig": "redirect",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "example": "ctp:analects/xue-er",
                    "kind": "query",
                    "name": "urn",
                    "orig": "urn",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "method": "GET",
              "orig": "/api/getlink",
              "parts": [
                "api",
                "getlink"
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
              "index$": 1
            },
            {
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "example": "https://ctext.org/analects/xue-er",
                    "kind": "query",
                    "name": "url",
                    "orig": "url",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "method": "GET",
              "orig": "/api/readlink",
              "parts": [
                "api",
                "readlink"
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
              "index$": 2
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "plugin": {
      "fields": [],
      "name": "plugin",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "params": [
                  {
                    "active": true,
                    "example": "textexport",
                    "kind": "param",
                    "name": "id",
                    "orig": "plugin_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "method": "GET",
              "orig": "/plugins/{pluginId}/plugin.xml",
              "parts": [
                "plugins",
                "{id}",
                "plugin.xml"
              ],
              "rename": {
                "param": {
                  "pluginId": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
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
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "example": "en",
                    "kind": "query",
                    "name": "if",
                    "orig": "if",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "https://ctext.org/plugins/textexport/plugin.xml",
                    "kind": "query",
                    "name": "installplugin",
                    "orig": "installplugin",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "return",
                    "orig": "return",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "method": "GET",
              "orig": "/account.pl",
              "parts": [
                "account.pl"
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
              "index$": 0
            }
          ],
          "key$": "load"
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
  config
}

