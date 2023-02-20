---
title: Limiting Execution Time
sidebar_position: 4
---

When executing WASM code it is sometimes useful to set a limit on how long it can run for. This can be used to prevent malicious or buggy code from running forever and slowing down your application. Wasmbox includes two mechanisms to do this, [Fuel Usage](./fuelusage.md) and [Epoch Interruption](./epochinterruption.md).

## Fuel Usage

[Fuel Usage](./fuelusage.md) adds a "fuel" cost to every single instruction which is executed, as soon as there is no more fuel available execution will terminate. Fuel usage is easy to use and allows very precise control over _exactly_ how much code can execute before termination.

:::tip
Fuel execution is more precise than epochs, but is slower to execute.
:::

## Epoch Interruption

[Epoch interruption](./epochinterruption.md) allows a deadline to be set, once that deadline has passed code will immediately terminate execution.

Epochs are **not** automatically incremented, your own code must be increasing the epoch when you wish to indicate that time has passed. This allows you to make epochs as small (e.g. every frame) or as large (e.g. every chapter of a story) as you like.

Because epochs are not automatically incremented your WASM code must be running in another thread, such as a [Job](/docs/basics/jobs.md), so that your code running on the main thread can increment the epoch.

:::tip
Epoch Interruption is faster than fuel usage, but is more difficult to use (requires jobs).
:::