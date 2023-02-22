---
title: Runtime WASM Loading
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The basic use of Wasmbox has a WASM/WAT file [imported](../reference/editor/import.md in the editor, to produce a [WasmAsset](../reference/code/wasmasset.md) which can be loaded at runtime. However sometimes it is necessary to load a WASM file at runtime, for example loading mods from a folder. This can be done with the [`DynamicWasmAsset`](./../reference/code/dynamicwasmasset.md) or a custom [`IWasmAsset`](./../reference/code/iwasmasset.md).

## Dynamic Wasm Asset

The [`DynamicWasmAsset`](./../reference/code/dynamicwasmasset.md) provides a way to create a WasmAsset a runtime from a file that was never processed in the editor. It can be loaded from raw WASM bytes, or [Web Assembly Text](https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format) format.

### WASM Bytes

A [`DynamicWasmAsset`](./../reference/code/dynamicwasmasset.md) can be loaded from WASM bytes stored in memory, or in a file.

<Tabs groupId="source">

<TabItem value="memory" label="In Memory (Byte Array)">

```csharp title="Loading WASM from a byte array"
byte[] some_wasm_bytes = GetWasmFromSomewhere();
DynamicWasmAsset.FromWASM(some_wasm_bytes);
```

</TabItem>

<TabItem value="file" label="File">

```csharp title="Loading WASM from a file"
string path = "path/to/some.wasm";
DynamicWasmAsset.FromPathWASM(path);
```

</TabItem>

</Tabs>

### WAT Text

A [`DynamicWasmAsset`](./../reference/code/dynamicwasmasset.md) can be loaded from WAT text stored in memory, or in a file.

<Tabs groupId="source">

<TabItem value="memory" label="In Memory (string)">

```csharp title="Loading WAT from a string"
string wat = "(module (memory 1) (func))";
DynamicWasmAsset.FromWAT(wat);
```

</TabItem>

<TabItem value="file" label="File">

```csharp title="Loading WAT from a file"
string path = "path/to/some.wat";
DynamicWasmAsset.FromPathWAT(path);
```

</TabItem>

</Tabs>

## Caching

When a WasmAsset is compiled into a [LoadedModule](../reference/code/loadedmodule.md) it is cached in memory, to speed up subsequent loads of the same asset. A [`DynamicWasmAsset`](./../reference/code/dynamicwasmasset.md) may **opt-in** to this behaviour by setting the `cacheKey`. The loaded module will be cached under this unique ID, later attempts to load another asset with the same cache key will load the original module.

:::tip

Only enable caching if the same module is likely to be reloaded several times.

:::

:::warning

**Do not** enable caching if is possible for the module to change!

:::

## More Customisation

If a [`DynamicWasmAsset`](./../reference/code/dynamicwasmasset.md) does not meet your use-case, consider creating a custom [`IWasmAsset`](../reference/code/iwasmasset.md) implementation. This will give you complete control over how a `Module` is constructed.