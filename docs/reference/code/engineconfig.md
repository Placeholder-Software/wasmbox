---
title: Engine Config
sidebar_position: 4
---

An `Engine` is used when a [WASM Asset](wasmasset.md) is loaded into a [`LoadedModule`](loadedmodule.md). The `EngineConfig` controls exactly how the asset is loaded and what features are compiled into the code.

## Properties

### `Default`

Get an `EngineConfig` with default settings.

### `UseFuel`

Enable "fuel consumption" for WASM code. When enabled each instruction will consume "fuel" and execution will terminate when out of fuel. This can be used to protect against buggy or malicious code taking too much time executing.

For more details on fuel consumption, see [this tutorial](/basics/fuelusage.md).

:::tip

Fuel consumption can significantly slow down the execution of WASM code.

:::

### `UseEpochInterruption`

Include support for `Epoch Interruption` in precompiled code. When enabled executing WebAssembly code can be interrupted by an external signal from another thread.

For more details on epoch interruption, see [this tutorial](/basics/epochinterruption.md).

### `OptimizationLevel`

Set the optimization priority for generated code:
 - `None`: Generated code will not be optimized at all.
 - `Speed` (**default**): Generated code will be optimized purely for speed.
 - `SpeedAndSize` Generated code will be optimized, but some speed optimizations are disabled if they cause the generated code to be significantly larger.

## Methods

### `GetEngine()`

Get the wasmtime `Engine` instance for the current configuration.

:::warning

The `Engine` object returned from this method **must not** be disposed!

:::