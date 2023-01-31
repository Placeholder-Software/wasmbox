---
title: Linker
---

A `Linker` provides a set of imports for instantiating a [`Module`](./module.md). The `Linker` class is a wrapper around the [`wasmtime::Linker`](https://docs.rs/wasmtime/latest/wasmtime/struct.Linker.html) struct.

A [`Module`](./module.md) contains a set of [imports](./module.md#ireadonlylistimport-imports), such as functions the WASM code can call, which must be supplied when an [`Instance`](./instance.md) is created from the [`Module`](./module.md). A `Linker` provides a convenient way to do this.

## Properties

### `bool AllowShadowing`

Configure if later definitions may have the same name are earlier definitions (the later one will replace the earlier one).

## Methods

### `void Define(string module, string name, object item)`

Define an `object` of some type (e.g. function, global, table, etc.) with the given module/name.

### `void DefineInstance(Store store, string name, Instance instance)`

Define all **exports** of the given [`Instance`](./instance.md) as **imports** to this `Linker`.

### `void DefineModule(Store store, Module module)`

Define all **exports** of the given [`Module`](./module.md) as **imports** to this `Linker`. The defined [`Module`](./module.md) will be instantiated using this `Linker`.

For more information about defining modules see the [Wasmtime documentation](https://docs.rs/wasmtime/latest/wasmtime/struct.Linker.html#method.module).

### `Instance Instantiate(Store store, Module module)`

Create an [`Instance`](./instance.md) of the given [`Module`](./module.md) using this `Linker`.

### `Function GetDefaultFunction(Store store, string name)`

Get the "default" `Function` export. An export with an empty string is considered to be a "default export". "_start" is also recognized for compatibility.

### `Function? GetFunction(Store store, string module, string name)`

Try to get the [`Function`](./table.md) with the given module/name.

### `Table? GetTable(Store store, string module, string name)`

Try to get the [`Table`](./table.md) with the given module/name.

### `Memory? GetMemory(Store store, string module, string name)`

Try to get the [`Memory`](./memory.md) with the given module/name.

### `Global? GetGlobal(Store store, string module, string name)`

Try to get the [`Global`](./global.md) with the given module/name.

### `Dispose()`

Destroy this `Linker`.

### `void DefineFunction(string module, string name, Action<A,B,C...> callback)`

Define a [`Function`](./table.md) in this `Linker` with the given module/name which A,C,B etc (up to 12 parameters) and returns nothing.

### `void DefineFunction<TResult>(string module, string name, Func<A,B,C...TResult> callback)`

Define a [`Function`](./table.md) in this `Linker` with the given module/name which A,C,B etc (up to 12 parameters) and returns `TResult`.

### `void DefineFunction(string module, string name, Function.UntypedCallbackDelegate callback, IReadOnlyList<ValueKind> parameterKinds, IReadOnlyList<ValueKind> resultKinds)`

Define a [`Function`](./table.md) in this `Linker` with the given module/name which accepts the list of parameter kinds and returns the list of result kinds.

:::tip

This version of `DefineFunction` supports any number of parameter/result type, but it is much slower to call than the strongly typed versions.

:::