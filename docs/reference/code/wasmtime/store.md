---
title: Store
---

A `Store` is the owner of all state in WASM. The `Store` class is a wrapper around the [`wasmtime::Store`](https://docs.rs/wasmtime/latest/wasmtime/struct.Store.html) struct.

When A [Module](./module.md) is instantiated within a `Store` all [functions](./function.md), [globals](./global.md), [tables](./table.md) and [memories](./memory.md) are owned by the `Store`.

:::tip

A `Store` is intended to be a short-lived object in a program. No form of GC is implemented so once an [`Instance`](./instance.md) is created within a `Store` it will not be deallocated until the `Store` itself is dropped.

:::

## Methods

### `void GC()`

Perform garbage collection of `ExternRef`s within this store.

:::tip

It is not required to actively call this function. GC will automatically happen when internal buffers fill up. This is provided if fine-grained control over the GC is desired.

:::

### `void AddFuel(ulong fuel)`

Adds fuel to this `Store` for WebAssembly code to consume while executing. See [this guide](../../../basics/fuelusage.md) for more information on fuel consumption.

### `ulong ConsumeFuel(ulong fuel)`

Remove fuel from this `Store` and returns the remaining amount of fuel. Throw `WasmtimeException` if there is insufficient fuel available.

See [this guide](../../../basics/fuelusage.md) for more information on fuel consumption.

### `ulong GetConsumedFuel()`

Get the total amount of fuel consumed within this `Store`.

### `void SetWasiConfiguration(WasiConfiguration config)`

Configure this store with [WASI](../../../getting_started/wasi_intro.md) support.

:::caution

Calling this method is not required if using the Wasmbox [WASI](../../../basics/wasi.md) implementation.

:::

### `void SetEpochDeadline(ulong ticksBeyondCurrent)`

Configure the epoch deadline for execution. See [this guide](../../../basics/epochinterruption.md) for more information on epoch interruption.

### `object? GetData()`

Get the C# accessible "context" associated with this `Store`.

### `SetData(object? data)`

Set the C# accessible "context" associated with this `Store`.

### `void Dispose()`

Destroy this `Store`, freeing all memory associated with it.