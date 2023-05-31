---
title: Async Execution
sidebar_position: 6
---

This scene demonstrates how to use async execution. Async execution allows a some running code to be paused and then resumed later. This is similar to a Unity coroutine but it can work with any program, even ones which were not designed for async execution! For more information about using async execution, see [this tutorial](./../../advanced/asyncify.md).

The `Demo Object` has a `AsyncDemoScript` attached which is loading the "AsyncWat" asset. This asset has the <b>Asyncify</b> option ticked [in the importer](../../reference/editor/import.md#3-transformation), which rewrites the WASM code to add support for async suspend/resume. Once the `AsyncDemoScript` is loaded it begins running in a Unity coroutine.

The running WASM code looks like this:

```wasm
;; get a number (the current time)
(call $.get_number)

;; suspend execution until the "Complete" button is clicked
(drop (call $wasi_snapshot_preview1.sched_yield))

;; get another number  (the current time)
(call $.get_number)

;; Return both numbers
```

The running WASM code is suspended and will remain suspended until the "Complete" button is clicked. While suspended no CPU resources are used at all. Once the button is clicked it will finish running and displays the difference between the two numbers.

1. Inspect `AsyncWat`
    - `Asyncify` has been ticked in the "Transformation" section
2. Open `AsyncDemoScript`
    - `DemoCoroutine` calls the "run()" method and receives a [`Future`](./../../reference/code/future.md) object.
    - Once created a Future **must** be run to completion, it cannot be cancelled!
    - `yield return future;` will resume the future once every frame until it is complete.
    - `future.TryGetResult` will attempt get a result from the future if it is complete.
    - When `future.TryGetResult` returns true it has returned a valid result and has internally disposed the future, it **must** not be called again.