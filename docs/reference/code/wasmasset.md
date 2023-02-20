---
title: WASM Asset
sidebar_position: 1
---

A `WasmAsset` is a WASM module which has been [imported](../editor/import.md) in the editor from a `*.wasm` or `*.wat` file and converted into a form ready to load at runtime. For `WasmAsset` editor/inspector documentation see [here](../editor/wasmasset.md).

It is also possible to load a WASM module at runtime from a `byte[]` or `string` ([`DynamicWasmAsset`](./dynamicwasmasset.md)) or to create a completely custom WASM asset type ([`IWasmAsset`](../code/iwasmasset.md)).

## Instantiating A WASM Asset

todo:Instantiating A WASM Asset

## Properties

### `Metadata`

Contains metadata about the WASM module this asset contains; lists of all imported and exported memories, globals, tables and functions.

This allows inspecting the dependencies of a WASM module without instantiating the module itself.