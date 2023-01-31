---
title: Engine
---

An `Engine` is a context for compiling WASM code into native machine code. The `Engine` class is a wrapper around the [`wasmtime::Engine`](https://docs.rs/wasmtime/latest/wasmtime/struct.Engine.html) struct.

Settings on the engine configure which optional features (e.g.[fuel usage](../../../basics/fuelusage.md), [epoch interruption](../../../basics/epochinterruption.md)) [`Modules`](./module.md) loaded with this `Engine` support. In Wasmbox this is controlled with the [`EngineConfig`](../engineconfig.md).

## Properties

### todo

## Methods

### `void Dispose()`

Dispose this `Engine` instance.

:::warning

Do not call `Dispose()` on `Engine` objects retrieved from Wasmbox (e.g. [`EngineConfig.GetEngine()`](../engineconfig.md#getengine)).

:::

## `void IncrementEpoch()`

Increment the `Epoch` on this `Engine`. See [this guide](../../../basics/epochinterruption.md) for more information on epoch interruption.