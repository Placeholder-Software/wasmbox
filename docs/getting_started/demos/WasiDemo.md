---
title: WASI Demo
sidebar_position: 1
---

This scene demonstrates the most usage of WASI (WebAssembly System Interface) with <b>Wasmbox</b>. It is located in `Assets\Plugins\PlaceholderSoftware\Wasmbox\Demos`.

The `Demo Object` has a `WasiDemoScript` attached. The [`ConfigureLinker`](./../../basics/linker.md) method is used to define a random number generator which can be accessed by WASM.

1. Inspect `WasiDemoWat`. The "Function Imports" foldout (near the bottom) shows an import of a WASI function "random_get".

2. `WasiDemoWat` imports a WASI random number generator and exports a function which generates a random 64 bit number.

3. Open `WasiDemoScript.cs`.
   a. `ConfigureLinker` gives access to the `Linker` which can be used to expose things to WASM.
   b. `OnEnable` uses <b>override</b> and calls `base.OnEnable()`, if you use `OnEnable` in your scripts which use `SimpleWasmMonoBehaviour` don't forget to do this!