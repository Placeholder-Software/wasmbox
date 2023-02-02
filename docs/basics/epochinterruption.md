---
title: Epoch Interruption
---

When executing WASM code it is sometimes useful to set a limit on how long it can run for. This can be used to prevent potentially malicious or buggy code from running forever and slowing down your application. Wasmbox includes two mechanisms to do this, [Epoch Interruption](./epochinterruption.md) and [Fuel Usage](./fuelusage.md).

:::tip
Epoch Interruption is faster than fuel usage, but requires another thread to increment epochs.
:::

Epoch interruption allows a deadline to be set, once that deadline has passed executing code will immediately terminate execution. Epochs are not automatically incremented, your own script must be increasing the epoch when you wish to indicate that time has passed.

:::tip
It is usually best to increment the epoch once per frame.
:::

todo:engine settings to enable epochs
todo:How to increment epochs tutorial
todo:reference docs for those things

