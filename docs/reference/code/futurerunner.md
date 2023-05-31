---
title: FutureRunner<T>
sidebar_position: 8
---

A [`Future<T>`](./future.md) can be converted into a `FutureRunner<T>` by calling `future.ToJob()`. A `FutureRunner<T>` can be resumed inside a Unity job. The `FutureRunner<T>` is fully integrated with the Unity safety system and will not allow itself to be used incorrectly.

## Coroutine Support

A `FutureRunner<T>` can be yielded in a Unity coroutine, the `FutureRunner<T>` will schedule a new job every frame to call `Resume` until it is complete.

```csharp title="Async WASM Coroutine"
// Call the function like normal
var future = Wrapper.run_example_method(1, 2, 3, 4);

// Wait until it is complete
yield return future.ToJob();

// Get the final result
future.TryComplete(out var result)
Debug.Log(result);
```

## Methods

### `Resume()`

Resume execution, running until either the next yield point or until completion. Returns `true` if `Resume` needs to be called again.

:::note

A `FutureRunner<T>` cannot be used to retrieve a result. Once `Resume()` has returned `true` inside a Job then `TryGetResult` can be called back on the original `Future<T>` (on the main thread).

:::