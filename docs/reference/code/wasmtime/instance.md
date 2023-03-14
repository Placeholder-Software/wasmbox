---
title: Instance
---

An `Instance` is an instantiation of a [`Module`](./module.md), which can be used to execute WASM code. The `Instance` class is a wrapper around the [`wasmtime::Instance`](https://docs.rs/wasmtime/latest/wasmtime/struct.Instance.html) struct.

Constructing an `Instance` is usually done with a [`Linker`](./linker.md), which provides all the imports the [`Module`](./module.md) requires.

## Methods

### `Action? GetAction<A,B,C...>(string name)`

Try to get a [`Function`](./function.md) from this `Instance` with the given name which takes arguments `A`,`B`,`C` etc (up to 12 parameters) and returns nothing.

### `Func<A,B,C,...,R> GetFunction<A,B,C...R>(string name)`

Try to get a [`Function`](./function.md) from this `Instance` with the given name which takes arguments `A`,`B`,`C` etc (up to 12 parameters) and returns `R`. If the function has multiple return types use a tuple as `R`.

```csharp
// Get a function from WASM
var func = instance.GetFunction<int, float, (float, int)>("demo_function");

if (func == null)
    throw new Exception("Oh no");

// Call it
(float, int) result = func(1, 2f);
```

### `Function? GetFunction(string name, Type? returnType, params Type[] parameterTypes)`

Try to get a [`Function`](./function.md) from this `Instance` with the given name, and which returns `returnType` and accepts `parameterTypes`.

:::tip

Using the `GetAction<>`/`GetFunction<>` versions are safer to use and are much faster to call.

:::

### `Function? GetFunction(string name)`

Try to get a [`Function`](./function.md) from this `Instance` with the given name.

### `Table? GetTable(string name)`

Try to get a [`Table`](./table.md) from this `Instance` with the given name.

### `Memory? GetMemory(string name)`

Try to get a [`Memory`](./memory.md) from this `Instance` with the given name.

### `Global? GetGlobal(string name)`

Try to get a [`Global`](./global.md) from this `Instance` with the given name.