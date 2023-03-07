---
title: Custom WASM Instantiation
sidebar_position: 3
---

Wasmbox provides [behaviours](./../reference/code/simplewasmmonobehaviour.md) to automatically load a WASM asset into a state that allows code to be run. However, it is possible to do this process directly in your own code to take complete control over the entire process.

:::tip

Refer to the [glossary](./../reference/glossary.md) for an overview of all the components involved.

:::

## Required Resources

```csharp
IWasmAsset Asset;
EngineConfig Config;
```

Before loading any WASM an `IWasmAsset` and an `EngineConfig` are required.

An `IWasmAsset` represents a source that WASM can be loaded from. This may be a [`WasmAsset`](./../reference/code/wasmasset.md) (imported in editor) a [`DynamicWasmAsset`](./../reference/code/dynamicwasmasset.md) (loaded at runtime from a file) or a custom [`IWasmAsset`](./../reference/code/iwasmasset.md) implementation.

An [`EngineConfig`](./../reference/code/engineconfig.md) configures how the WASM loaded from the asset should be compiled into executable code. Compile time features such as [Fuel Usage](./../basics/limiting_execution/fuelusage.md) can be enabled.

## Loading

```csharp
var module = Asset.Load(Config);
if (module == null)
    throw new Exception("Loading Failed");
```

Loading the asset with an [`EngineConfig`](./../reference/code/engineconfig.md) creates a [`Module`](./../reference/code/wasmtime/module.md) which contains the compiled executable machine code in memory. If loading fails for some reason a `null` object will be returned.

:::tip

Compiling a WASM Module is potentially a slow process if the asset is large and has not been [precompiled](./../reference/editor/import.md#4-compilation).

:::

## Configuring

```csharp
var store = module.CreateStore();

var linker = module.CreateLinker();
linker.DefineFunction("demo", "add", (int a, int b) => a + b);
linker.DefineFunction("demo", "sub", (int a, int b) => a - b);
```

To create an [`Instance`](./../reference/code/wasmtime/instance.md) from a [module](./../reference/code/wasmtime/module.md) requires a [`Store`](./../reference/code/wasmtime/store.md) and a [`Linker`](./../reference/code/wasmtime/linker.md).

The [`Linker`](./../reference/code/wasmtime/linker.md) can be used to expose C# functions to WASM. See the [tutorial on linking](./../basics/linker.md) for more information.

The [`Store`](./../reference/code/wasmtime/store.md) contains all the _state_ of the executed WASM code. Multiple [`Instances`](./../reference/code/wasmtime/instance.md) can share a [`Store`](./../reference/code/wasmtime/store.md).

## Instantiating

```csharp
var instance = module.CreateInstance(linker, store);

var add = instance.GetFunction<int, int, int>("add");
var result = add(1, 2);
```

Finally an [`Instance`](./../reference/code/wasmtime/instance.md) can be created using the [module](./../reference/code/wasmtime/module.md), [`Store`](./../reference/code/wasmtime/store.md) and [`Linker`](./../reference/code/wasmtime/linker.md).

[`Functions`](./../reference/code/wasmtime/function.md), [`Memories`](./../reference/code/wasmtime/memory.md), [`Tables`](./../reference/code/wasmtime/table.md) and [`Globals`](./../reference/code/wasmtime/global.md) can be retrieved from the [`Instance`](./../reference/code/wasmtime/instance.md) and used later.

## Complete Example

```csharp
public class DemoWasmLoading
    : MonoBehaviour
{
    private WasmAsset Asset;
    private EngineConfig Config;

    void OnEnable()
    {
        var module = Asset.Load(Config);
        if (module == null)
            throw new Exception("Loading Failed");

        using var store = module.CreateStore();
        using var linker = module.CreateLinker();
        linker.DefineFunction("demo", "add", (int a, int b) => a + b);
        linker.DefineFunction("demo", "sub", (int a, int b) => a - b);

        var instance = module.CreateInstance(linker, store);
        var add = instance.GetFunction<int, int, int>("add");

        var result = add(1, 2);
        Debug.Log(result);
    }
}
```