---
title: IWasmAsset
sidebar_position: 2
---

`IWasmAsset` is an interface which represents a source which a [`Module`](./../code/wasmtime/module.md) can be loaded from. Built in implementations include [`WasmAsset`](./wasmasset.md) ([imported](./../editor/import.md) through the editor) and [`DynamicWasmAsset`](./dynamicwasmasset.md) (loaded at runtime).

## Properties

### `string? CacheKey`

When a [`LoadedModule`](./loadedmodule.md) is created from this WASM asset it is cached in memory with this value and the [`EngineConfig`](./../code/engineconfig.md) as the key. Any future loads of _any_ asset with the same key & [`EngineConfig`](./../code/engineconfig.md) will use this cached value. Return `null` to disable caching entirely.

:::caution

Creating multiple `WasmAsset`s with the same `CacheKey` but different WASM/WAT code will lead to unpredictable behaviour!

:::

## Methods

### `Module? LoadModule(Engine engine);`

Attempt to load a [`Module`](./wasmtime/module.md) from this asset. Return `null` if the load fails for any reason.