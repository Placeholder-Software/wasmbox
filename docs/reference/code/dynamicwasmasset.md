---
title: Dynamic WASM Asset
sidebar_position: 3
---

`DynamicWasmAsset` is an implementation of [`IWasmAsset`](./iwasmasset.md) which allows loading of arbitrary data as WASM/WAT code at runtime. [Read more](./../../advanced/runtime_wasm_loading.md) about runtime loading of WASM.

## Properties

### `CacheKey`

If non-null the [`Module`](./../code/wasmtime/module.md)s loaded from this asset will be cached with this key. Any later loads from an asset with the same CacheKey & [`EngineConfig`](./../code/engineconfig.md) will load the same module.

:::caution

Creating multiple `DynamicWasAsset`s with the same `CacheKey` but different WASM/WAT code will lead to unpredictable behaviour!

:::

## Static Methods

### `FromWASM(string name, byte[] bytes, string? cacheKey = null)`

Create a new `DynamicWasAsset` from the given WASM bytes. The `name` sets the `Name` of the [`Module`](./../code/wasmtime/module.md) created from this asset.

### `FromWAT(string name, string wat, string? cacheKey = null)`

Create a new `DynamicWasAsset` from the given [WAT](https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format) text. The `name` sets the `Name` of the [`Module`](./../code/wasmtime/module.md) created from this asset.

### `FromPathWASM(string name, string path, string? cacheKey = null)`

Invoke `FromWASM` with all of the bytes from the file at the given path.

### `FromPathWAT(string name, string wat, string? cacheKey = null)`

Invoke `FromWAT` with all of the text from the file at the given path.