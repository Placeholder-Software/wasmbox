---
title: Async Execution With Jobs
sidebar_position: 7
---

This scene is very similar to the [basic async demo scene](./async.md). In this example the `AsyncJobDemoScript` begins running the async WASM on the main thread and then finishes running the rest of it using the [Unity Job System](https://docs.unity3d.com/Manual/JobSystemOverview.html).

The running WASM code is suspended and will remain suspended until the "Complete" button is clicked. While suspended no CPU resources are used at all. Once the button is clicked it will finish running (using the Job System) and displays the difference between the two numbers.

1. Open `AsyncJobsDemoScript`
    - `DemoCoroutine` calls the `run()` method and receives a [`Future`](./../../reference/code/future.md) object.
    - The coroutine calls `_future.ToJob()` to convert into a Job compatible [`FutureRunner<T>`](./../../reference/code/futurerunner.md).
    - `yield return future.ToJob();` will automatically schedule jobs to resume the future until it is complete.
    - [`FutureRunner<T>`](./../../reference/code/futurerunner.md) can be passed into a custom job.