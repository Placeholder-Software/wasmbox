---
title: Module
---

A `Module` represents WASM code that has been compiled by an [`Engine`](engine.md) into executable machine code. The `Module` class is a wrapper around the [`wasmtime::Module`](https://docs.rs/wasmtime/latest/wasmtime/struct.Module.html) struct. A `Module` declares a set of imports (things it requires) and exports (things it provides).

The [`Engine`](./engine.md) which is used controls exactly how the WASM is compiled into a `Module`. For example if the [`Engine`](./engine.md) has [fuel usage](../../../basics/fuelusage.md) enabled the `Module` will be compiled with support for fuel usage. It is possible to have multiple modules which represent the same WASM code compiled with different engines. An [`Engine`](./engine.md) in Wasmbox is usually configured with an [`EngineConfig`](./../engineconfig.md).

## Properties

### `string Name`

Get the name of this module.

### `IReadOnlyList<Import> Imports`

Get the list of things that are imported by this `Module`. When the `Module` is instantiated all imports must be satisfied by something, for example they could be added to the [`Linker`](linker.md).

### `IReadOnlyList<Export> Exports`

Get the list of things that are exported by this `Module`.

## Static Methods

### `string? Validate(Engine engine, ReadOnlySpan<byte> bytes)`

Validates the given WebAssembly module. Returns **null* if the module is valid. Returns an error message if it is invalid.

### `byte[] ConvertText(string wat)`

Convert [Web Assembly Text (WAT)](https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format) formatted string into WASM bytes.

### `Module FromBytes(Engine engine, string name, ReadOnlySpan<byte> bytes)`

Create a `Module` from a span of WASM bytes.

### `Module FromFile(Engine engine, string path)`

Create a `Module` from the WASM bytes in the given file.

### `Module FromStream(Engine engine, string name, Stream stream)`

Create a `Module` from the WASM bytes in the given stream.

### `Module FromText(Engine engine, string name, string text)`

Create a `Module` from [Web Assembly Text (WAT)](https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format) formatted text.

### `Module FromTextFile(Engine engine, string path)`

Create a `Module` from [Web Assembly Text (WAT)](https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format) formatted text in a file.

### `Module Deserialize(Engine engine, string name, ReadOnlySpan<byte> bytes)`

Deserialize a precompiled `Module` from the given bytes. See [`Serialize`](#byte-serialize).

### `Module DeserializeFile(Engine engine, string name, string path)`

Deserialize a precompiled `Module` from the bytes in a given file. See [`Serialize`](#byte-serialize).

## Methods

### `byte[] Serialize()`

Serialize this `Module` into an array of bytes. See [`Deserialize`](#module-deserializeengine-engine-string-name-readonlyspanbyte-bytes).

:::tip

Modules serialized in this way must be deserialized by an `Engine` with an identical config and an identical version of Wasmtime.

:::