---
title: Calling C# Code From WASM
sidebar_position: 2
---

Once a WASM module has been instantiated WASM code can be executed in a completely contained "sandbox" - the WASM code cannot interact with anything outside of the box. This is excellent for ensuring security and determinism, but it does significantly limit the capabilities of WASM code. The [`Linker`](/docs/reference/code/wasmtime/linker.md) allows C# methods to be exposed to the sandbox, allowing WASM code to call it directly.

## Limitations

WASM supports a [very limited set of types](/docs/reference/code/wasmtime/valuekind.md), functions defined in the [`Linker`](/docs/reference/code/wasmtime/linker.md) can only use these types:

| WASM Type | C# Type |
| --------- | ----------- |
| i32       | `int`       |
| i64       | `long`      |
| f32       | `float`     |
| f64       | `double`    |
| externref | Any `class`/`object` |
| funcref   | `Wasmtime.Function`  |
| v128      | `Wasmtime.V128` |

## Example

To add things to a [`Linker`](/docs/reference/code/wasmtime/linker.md) simply _Define_ them. The simplest use case is directly adding a [C# function to call](#defining-functions) or adding a [WASI feature](#defining-wasi-features). Alternatively complex systems can be assembled from multiple independent WASM modules by [adding an Instance](#defining-an-instance) or [adding a Module](#defining-a-module).

### Defining Functions

A C# function/method can be defined:

```csharp
// Lambda function
linker.DefineFunction("module", "add", (int a, int b) => a + b);

// Method
linker.DefineFunction("module", "sub", Subtract);

static int Subtract(int a, int b)
{
    return a - b;
}
```

### Defining WASI Features

A WASI feature (such as a random number generator) can be defined:

```csharp
var rng = new CryptoRandomSource();
linker.Define(rng);
```

### Defining An Instance

An `Instance` can be defined, to add all of it's _exports_ for other WASM code to call:

```csharp
Instance instance;
Linker linker;
linker.DefineInstance(store, "the_name", instance);
```

:::tip

This is an advanced use case which requires manually loading and instantiating modules! [Read more](./../advanced/manual_loading.md).

:::

### Defining A Module

```csharp
Module module;
Linker linker;
linker.DefineModule(store, module);
```

:::tip

This is an advanced use case which requires manually loading modules! [Read more](./../advanced/manual_loading.md).

:::

## WASI

WASI is the **WebAssembly System Interface**. WASI is an API specification that provides access to several operating-system-like features such as filesystems, clocks, and random numbers which can all be added to the [`Linker`](/docs/reference/code/wasmtime/linker.md) for WASM code to call directly. Read more about using WASI [**here**](/docs/basics/wasi/index.md).