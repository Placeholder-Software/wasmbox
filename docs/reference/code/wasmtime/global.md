---
title: Global
---

A `Global` represents a single named value with a specific type. All globals are readable, some globals are also writable.

The `Global` class is a wrapper around the [`wasmtime::Global` struct](https://docs.rs/wasmtime/latest/wasmtime/struct.Global.html).

## Methods

### `Global.Accessor<T>? Wrap<T>`

Attempts to create a strongly typed "wrapper" around this global. The type of the wrapper is checked when it is created and if the type is incompatible this method will return `null`. Using the wrapper to get and set values does not allocate.

```clike title="Global Accessor"
var wrapper = global.Wrap<int>();
int value = wrapper.GetValue();     // Returns `int`
wrapper.SetValue(17);               // Accepts `int`

// highlight-next-line
global.Wrap<string>();              // Returns null, wrong type
```

### `object? GetValue()`

Get the value of this global variable.

:::caution

Using this method always allocates, prefer using `Wrap`.

:::

### `void SetValue(object? value)`

Set the value of this global variable.

Throws:
 - `InvalidOperationException` if this global is Immutable.
 - `WasmtimeException` if the given value cannot be converted into a supported type.

:::caution

Using this method always allocates, prefer using `Wrap`.

:::

## Properties

### `ValueKind Kind`

Get the type of this global variable. See more about ValueKind [here](./valuekind.md).

### `Mutability Mutability`

Get the a value which indicates if this global is read-only.