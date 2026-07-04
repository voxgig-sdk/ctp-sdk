# Ctp SDK configuration


def make_config():
    return {
        "main": {
            "name": "Ctp",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://ctext.org",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "json_api": {},
                "plugin": {},
                "plugin_api": {},
            },
        },
        "entity": {
      "json_api": {
        "fields": [
          {
            "active": True,
            "name": "url",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "urn",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
        ],
        "name": "json_api",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "en",
                      "kind": "query",
                      "name": "if",
                      "orig": "if",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "ctp:analects/xue-er",
                      "kind": "query",
                      "name": "urn",
                      "orig": "urn",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/api/gettext",
                "parts": [
                  "api",
                  "gettext",
                ],
                "select": {
                  "exist": [
                    "if",
                    "urn",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": 0,
                      "kind": "query",
                      "name": "redirect",
                      "orig": "redirect",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": "ctp:analects/xue-er",
                      "kind": "query",
                      "name": "urn",
                      "orig": "urn",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/api/getlink",
                "parts": [
                  "api",
                  "getlink",
                ],
                "select": {
                  "exist": [
                    "redirect",
                    "urn",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "https://ctext.org/analects/xue-er",
                      "kind": "query",
                      "name": "url",
                      "orig": "url",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/api/readlink",
                "parts": [
                  "api",
                  "readlink",
                ],
                "select": {
                  "exist": [
                    "url",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 2,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
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
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "textexport",
                      "kind": "param",
                      "name": "id",
                      "orig": "plugin_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/plugins/{pluginId}/plugin.xml",
                "parts": [
                  "plugins",
                  "{id}",
                  "plugin.xml",
                ],
                "rename": {
                  "param": {
                    "pluginId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
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
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "en",
                      "kind": "query",
                      "name": "if",
                      "orig": "if",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "https://ctext.org/plugins/textexport/plugin.xml",
                      "kind": "query",
                      "name": "installplugin",
                      "orig": "installplugin",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "return",
                      "orig": "return",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/account.pl",
                "parts": [
                  "account.pl",
                ],
                "select": {
                  "exist": [
                    "if",
                    "installplugin",
                    "return",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
