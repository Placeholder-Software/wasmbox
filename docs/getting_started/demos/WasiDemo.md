---
title: WASI Demo
sidebar_position: 2
---

This scene demonstrates the most usage of WASI (WebAssembly System Interface) with <b>Wasmbox</b>. It is located in `Assets\Plugins\PlaceholderSoftware\Wasmbox\Demos`.

The `Demo Object` has a `WasiDemoScript` attached. The [`ConfigureLinker`](./../../basics/linker.md) method is used to define a random number generator which can be accessed by WASM.

1. Inspect `WasiDemoWat`.
    - The `Function Imports` foldout (near the bottom) shows an import of the WASI function `random_get`.
    - The `Function Exports` foldout (near the bottom) shows an export of a function `get_random_i64`
2. Open `WasiDemoScript.cs`.
   - `ConfigureLinker` gives access to the `Linker` which can be used to expose things to WASM.
   - [`FastRandomSource`](./../../reference/code/WASI/random.md) is added to the linker, this provides the required `random_get` import.
   - `OnEnable` uses <b>override</b> and calls `base.OnEnable()`, if you use `OnEnable` in your scripts which use `SimpleWasmMonoBehaviour` don't forget to do this!