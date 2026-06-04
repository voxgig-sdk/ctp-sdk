# Ctp SDK

Programmatic access to the Chinese Text Project's library of pre-modern Chinese texts via a JSON API and Plugin API

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About CTP API

The [Chinese Text Project](https://ctext.org) (CTP) is an online open-access digital library of pre-modern Chinese writing, hosting over thirty thousand titles and more than five billion characters of classical and literary Chinese text. The CTP API lets external applications read text content, resolve references, and embed CTP functionality remotely.

The project exposes two integration surfaces. The **JSON API** is for outside applications fetching CTP data; the **Plugin API** is for adding external tools that appear inside the CTP interface. Documented JSON functions include:

- `gettext` — retrieve textual data (titles, ordered paragraph lists, subsection URNs) for a given CTP URN such as `ctp:analects/xue-er`
- `getlink` — turn a CTP URN into a direct link
- `readlink` — resolve a CTP URL back to its URN
- `getstatus` — check current user authentication status
- `getdictionaryheadwords` — list Chinese dictionary headwords

CTP URNs (e.g. `ctp:analects/xue-er`) are the opaque identifiers used throughout the API. CORS is enabled and browser clients can use `withCredentials` for authenticated requests. Access is tiered: unauthenticated callers get a limited quota, logged-in accounts get more, and institutional subscribers get access per their agreement; hitting the cap returns a "Request limit reached" response that prompts users to log in.

## Try it

**TypeScript**
```bash
npm install ctp
```

**Python**
```bash
pip install ctp-sdk
```

**PHP**
```bash
composer require voxgig/ctp-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/ctp-sdk/go
```

**Ruby**
```bash
gem install ctp-sdk
```

**Lua**
```bash
luarocks install ctp-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { CtpSDK } from 'ctp'

const client = new CtpSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o ctp-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "ctp": {
      "command": "/abs/path/to/ctp-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **JsonApi** | The JSON API surface for fetching CTP content from external applications, covering functions like `gettext`, `getlink`, `readlink`, `getstatus`, and `getdictionaryheadwords`. | `/api/gettext` |
| **Plugin** | A registered external tool that integrates into the CTP user interface via the Plugin API. | `/plugins/{pluginId}/plugin.xml` |
| **PluginApi** | The integration surface for building plugins that extend the CTP site with external tools and embedded functionality. | `/account.pl` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from ctp_sdk import CtpSDK

client = CtpSDK({})


# Load a specific jsonapi
jsonapi, err = client.JsonApi(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'ctp_sdk.php';

$client = new CtpSDK([]);


// Load a specific jsonapi
[$jsonapi, $err] = $client->JsonApi(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/ctp-sdk/go"

client := sdk.NewCtpSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "Ctp_sdk"

client = CtpSDK.new({})


# Load a specific jsonapi
jsonapi, err = client.JsonApi(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("ctp_sdk")

local client = sdk.new({})


-- Load a specific jsonapi
local jsonapi, err = client:JsonApi(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = CtpSDK.test()
const result = await client.JsonApi().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = CtpSDK.test(None, None)
result, err = client.JsonApi(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = CtpSDK::test(null, null);
[$result, $err] = $client->JsonApi(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.JsonApi(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = CtpSDK.test(nil, nil)
result, err = client.JsonApi(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:JsonApi(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the CTP API

- Upstream: [https://ctext.org](https://ctext.org)
- API docs: [https://ctext.org/tools/api](https://ctext.org/tools/api)

- Texts and metadata are copyright Chinese Text Project (ctext.org), 2006-2026
- When citing or reusing content, link to the corresponding CTP page or to `http://ctext.org`
- Some material is provided by institutional subscribers under separate terms; respect any per-text notices
- See [CTP copyright FAQ](https://ctext.org/faq#copyright) for full terms

---

Generated from the CTP API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
