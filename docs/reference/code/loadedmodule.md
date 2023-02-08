---
title: Loaded Module
sidebar_position: 5
---

A `LoadedModule` represents [WASM Asset](./wasmasset.md) that has been loaded into memory and is ready to be used to create WASM instances.

A `LoadedModule` can be created from any [WASM Asset](./wasmasset.md) (including a custom [IWasmAsset](./iwasmasset.md)) by calling `asset.Load(EngineConfig.Default)`. Modules will be loaded into memory and compiled the first time this is called, subsequent calls will load from the cache.

:::tip

See [this documentation](./wasmasset.md#instantiating-a-wasm-asset) for more information on creating WASM Instances

:::

## Methods

### `Dispose()`

Dispose the `LoadedModule` and free all memory used by it.

### `Store CreateStore()`

Create a new [`Store`](./wasmtime/store.md) which can be used with instances created from this `LoadedModule`.

### `Linker CreateLinker()`

Create a new [`Linker`](./wasmtime/linker.md) which can be used to configure instances created from this `LoadedModule`.

### `Instance CreateInstance(Linker linker, Store store)`

Use a `Store` and ` Linker` to create a new [`Instance`](./wasmtime/instance.md) which can be used to execute WASM code.