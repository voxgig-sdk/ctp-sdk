# Ctp SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Ctp",
            "slug": "ctp",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://ctext.org",
            "auth": {
                "prefix": "",
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
            "name": "url",
            "short": "Direct URL to the text",
            "type": "`$STRING`",
          },
          {
            "name": "urn",
            "short": "CTP URN for the specified URL",
            "type": "`$STRING`",
          },
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
                      "type": "`$STRING`",
                    },
                    {
                      "example": "ctp:analects/xue-er",
                      "kind": "query",
                      "name": "urn",
                      "orig": "urn",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
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
              },
              {
                "args": {
                  "query": [
                    {
                      "example": 0,
                      "kind": "query",
                      "name": "redirect",
                      "orig": "redirect",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": "ctp:analects/xue-er",
                      "kind": "query",
                      "name": "urn",
                      "orig": "urn",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
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
              },
              {
                "args": {
                  "query": [
                    {
                      "example": "https://ctext.org/analects/xue-er",
                      "kind": "query",
                      "name": "url",
                      "orig": "url",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
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
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "plugin": {
        "fields": [
          {
            "name": "id",
            "type": "`$STRING`",
          },
        ],
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
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
              },
            ],
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
                "args": {
                  "query": [
                    {
                      "example": "en",
                      "kind": "query",
                      "name": "if",
                      "orig": "if",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "https://ctext.org/plugins/textexport/plugin.xml",
                      "kind": "query",
                      "name": "installplugin",
                      "orig": "installplugin",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "return",
                      "orig": "return",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
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
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
