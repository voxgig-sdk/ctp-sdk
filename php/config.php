<?php
declare(strict_types=1);

// Ctp SDK configuration

class CtpConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Ctp",
                "slug" => "ctp",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://ctext.org",
                "auth" => [
                    "prefix" => "",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "json_api" => [],
                    "plugin" => [],
                    "plugin_api" => [],
                ],
            ],
            "entity" => [
        'json_api' => [
          'fields' => [
            [
              'name' => 'url',
              'short' => 'Direct URL to the text',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'urn',
              'short' => 'CTP URN for the specified URL',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'json_api',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'en',
                        'kind' => 'query',
                        'name' => 'if',
                        'orig' => 'if',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'ctp:analects/xue-er',
                        'kind' => 'query',
                        'name' => 'urn',
                        'orig' => 'urn',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/gettext',
                  'parts' => [
                    'api',
                    'gettext',
                  ],
                  'select' => [
                    'exist' => [
                      'if',
                      'urn',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 0,
                        'kind' => 'query',
                        'name' => 'redirect',
                        'orig' => 'redirect',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 'ctp:analects/xue-er',
                        'kind' => 'query',
                        'name' => 'urn',
                        'orig' => 'urn',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/getlink',
                  'parts' => [
                    'api',
                    'getlink',
                  ],
                  'select' => [
                    'exist' => [
                      'redirect',
                      'urn',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'https://ctext.org/analects/xue-er',
                        'kind' => 'query',
                        'name' => 'url',
                        'orig' => 'url',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/readlink',
                  'parts' => [
                    'api',
                    'readlink',
                  ],
                  'select' => [
                    'exist' => [
                      'url',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'plugin' => [
          'fields' => [],
          'name' => 'plugin',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => 'textexport',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'plugin_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/plugins/{pluginId}/plugin.xml',
                  'parts' => [
                    'plugins',
                    '{id}',
                    'plugin.xml',
                  ],
                  'rename' => [
                    'param' => [
                      'pluginId' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'plugin_api' => [
          'fields' => [],
          'name' => 'plugin_api',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'en',
                        'kind' => 'query',
                        'name' => 'if',
                        'orig' => 'if',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'https://ctext.org/plugins/textexport/plugin.xml',
                        'kind' => 'query',
                        'name' => 'installplugin',
                        'orig' => 'installplugin',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'return',
                        'orig' => 'return',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/account.pl',
                  'parts' => [
                    'account.pl',
                  ],
                  'select' => [
                    'exist' => [
                      'if',
                      'installplugin',
                      'return',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return CtpFeatures::make_feature($name);
    }
}
