---
title: Parallel Jobs
sidebar_position: 5
---

This scene demonstrates using WASM in a Unity Job. For more information about using Wasmbox with Unity Jobs, see [this tutorial](./../../basics/jobs.md).

The `Demo Object` has a `JobsDemoScript` attached. This schedules a new job to calculate a large fibonacci number and then waits for the job to complete. The number at the bottom of the screen is updated every time a job finishes. Even though this it is quite slow to compute the main thread does not slow down.

1. Open `JobsDemoScript.cs`.
   a. The wrapper is passed directly into a job.
   b. The job must be completed before the wrapper can be used again.