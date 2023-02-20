---
title: Engine
---

An `Engine` is used to compile WASM code into native machine code ready for execution. The `Engine` class is a wrapper around the [`wasmtime::Engine`](https://docs.rs/wasmtime/latest/wasmtime/struct.Engine.html) struct.

Settings on the engine configure which optional features (e.g. [fuel usage](/basics/limiting_execution/fuelusage.md), [epoch interruption](/basics/limiting_execution/epochinterruption.md)) [`Modules`](./module.md) loaded with this `Engine` support. In Wasmbox this is controlled with the [`EngineConfig`](../engineconfig.md).

## Methods

### `void Dispose()`

Dispose this `Engine` instance.

:::warning

Do not call `Dispose()` on `Engine` objects retrieved from Wasmbox (e.g. [`EngineConfig.GetEngine()`](../engineconfig.md#getengine)).

:::

## `void IncrementEpoch()`

Increment the `Epoch` on this `Engine`. See [this guide](/basics/limiting_execution/epochinterruption.md) for more information on epoch interruption.