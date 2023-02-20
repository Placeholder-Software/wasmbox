---
title: ValueKind
---

A `ValueKind` represents all of the possible types of a WebAssembly value. This is used to represent the type of various constructs such as [Globals](./global.md), or [Function](./function.md) parameters/results.

| ValueKind   | C# Type            |
| ----------- | ------------------ |
| Int32       | `int`              |
| Int64       | `long`             |
| Float32     | `float`            |
| Float64     | `double`           |
| V128        | `Wasmtime.V128`[*](#v128) |
| FuncRef     | `Wasmtime.Function`|
| ExternRef   | `object`[*](#externref) |

### V128

`V128` is a 128 bit value type. C# has no built in equivalent to this type, instead the `Wasmtime.V128` type provides a way to interact with values of this type.

### ExternRef

ExternRef represents an **opaque** reference to any data within WebAssembly. Any C# reference type (anything derived from `object`) can be passed as an `ExternRef`. WASM code cannot create new `externref` values. WASM code cannot do anything with an `externref`, other than pass it as an argument to other functions.

These properties make `externref` objects useful as "capabilities" which WASM can access. For example if you pass a `GameObject` into some WASM code as an `externref` and the same code later passes you back a `GameObject` you know that it **must** be an object you gave to the WASM earlier, because it is impossible for WASM to create new `externref` values.