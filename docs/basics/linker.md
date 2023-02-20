---
title: WASM Calling C#
sidebar_position: 2
---

Once a WASM module has been instantiated WASM code can be executed in a completely contained "sandbox" - the WASM code cannot interact with anything outside of the box. This is excellent for ensuring security and determinism, but it does significantly limit the capabilities of WASM code. The [`Linker`](/docs/reference/code/wasmtime/linker.md) allows C# methods to be exposed to the sandbox, allowing WASM code to call it directly.

## Limitations

todo:type limitations

## Example

To add things to a [`Linker`](/docs/reference/code/wasmtime/linker.md) simply _Define_ them. The simplest use case is directly adding a [C# function to call](#add-a-function) or adding a [WASI feature](#define-a-wasi-feature). Alternatively complex systems can be assembled from multiple independent WASM modules by [adding an Instance](#add-another-instance) or [adding a Module](#add-a-module).

### Defining Functions

A C# function/method can be defined:

```clike
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

```clike
var rng = new CryptoRandomSource();
linker.Define(rng);
```

### Defining An Instance

An `Instance` can be defined, to add all of it's _exports_ for other WASM code to call:

```clike
Instance instance;
Linker linker;
linker.DefineInstance(store, "the_name", instance);
```

### Defining A Module

```clike
Module module;
Linker linker;
linker.DefineModule(store, module);
```

## WASI

WASI is the **WebAssembly System Interface**. WASI is an API specification that provides access to several operating-system-like features such as filesystems, clocks, and random numbers which can all be added to the [`Linker`](/docs/reference/code/wasmtime/linker.md) for WASM code to call directly. Read more about using WASI [**here**](./wasi.md).