---
title: Future<T>
sidebar_position: 7
---

When an WASM function is transformed into an [async](./../../advanced/asyncify.md) WASM function the return value changes from `T` to `Future<T>`. A `Future<T>` object represents the suspended execution of this function call and can be used to resume execution and to eventually retrieve a result.

## Coroutine Support

A `Future<T>` can be yielded in a Unity coroutine, the `Future<T>` will run `Resume` every frame until it is complete.

```csharp title="Async WASM Coroutine"
// Call the function like normal
var future = Wrapper.run_example_method(1, 2, 3, 4);

// Wait until it is complete
yield return future;

// Get the final result
future.TryComplete(out var result)
Debug.Log(result);
```

## Properties

### `IsDisposed`

Check if this `Future<T>` has been disposed. No other properties of methods of the `Future<T>` may be accessed once this is `true`.

### `HasResult`

Check if this `Future<T>` has finished executing and has a result waiting to be retrieved (call `TryGetResult`).

## Methods

### `CreateFromResult`

:::warning

This is used by Wasmbox code to construct a new `Future<T>` and should not be called directly.

:::

### `CreateFromSuspended`

:::warning

This is used by Wasmbox code to construct a new `Future<T>` and should not be called directly.

:::

### `ToJob()`

Crate a new [`FutureRunner<T>`](./futurerunner.md) which can be used to execute this `Future<T>` in a job.

### `Resume()`

Resume execution, running until either the next yield point or until completion. Returns `true` if `Resume` needs to be called again.

### `Wait()`

Run this `Future<T>` until it is complete and then returns the result. Using this method effectively turns the `Future<T>` back into a normal function call, without any of the advantages of async execution.

:::caution

Calling `Wait()` will block the main thread until execution is complete!

:::

### `TryGetResult(out T? result)`

Attempt to retrieve a result from this `Future<T>`. Returns `true` if the `Future<T>` was complete and a result was retrieved. After this has been called once the future is disposed, `IsDisposed` becomes `true`, and no methods may be called. If execution resulted in an exception then it will be thrown when this method is called.