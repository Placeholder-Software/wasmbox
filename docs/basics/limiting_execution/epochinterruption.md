---
title: Epoch Interruption
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

When executing WASM code it is sometimes useful to set a limit on how long it can run for. This can be used to prevent potentially malicious or buggy code from running forever and slowing down your application. Wasmbox includes two mechanisms to do this, [Epoch Interruption](./epochinterruption.md) and [Fuel Usage](./fuelusage.md).

Epoch interruption allows a deadline to be set, once that deadline has passed executing code will immediately terminate execution. Epochs are not automatically incremented, your own script must be increasing the epoch when you wish to indicate that time has passed. For example WASM executing within a [Job](../jobs.md) while the main thread increments the epoch every frame.

:::tip
Epoch Interruption is faster than fuel usage, but requires another thread to increment epochs.
:::

## Enabling Epoch Interruption

Epoch Interruption must be enabled in the [`EngineConfig`](../../reference/code/engineconfig.md) used to load a WASM Asset:

```csharp
EngineConfig config = EngineConfig.Default;
config.UseEpochInterruption = true;
```

:::tip

If the WASM Asset is precompiled it must **also** be enabled in the [importer](../../reference/editor/import.md#4-compilation):

![Compilation Inspector](/img/CompilationInspector.png)

:::

## Setting A Limit

The Epoch limit is set on a [`Store`](../../reference/code/wasmtime/store.md), all [`Instances`](../../reference/code/wasmtime/instance.md) sharing a `Store` share the same epoch deadline.

```csharp
Store store; // Get a store from somewhere

store.SetEpochDeadline(100);
```

## Incrementing The Epoch

The epoch is incremented on the [`Engine`](../../reference/code/wasmtime/engine.md), through an [`EngineConfig`](../../reference/code/engineconfig.md#getepochgroup).

:::tip

All WASM Instances loaded with the same [`EngineConfig`](../../reference/code/engineconfig.md) share the same epoch. Use [`EpochGroup`](../../reference/code/engineconfig.md#epochgroup) to split up identical engine configs if necessary.

:::

```csharp
EngineConfig config = EngineConfig.Default;

var handle = config.GetEpochGroup();

if (handle == null)
    throw new NotImplementedException("handle is null if config.UseEpochInterruption is false!");

handle.SetEpoch(Time.frameCount);
```

## Handling An Epoch Timeout

WASM function calls through the Wasmbox [generated wrapper code](../../reference/code/codegeneration.md#trap-handling) have two trap handling methods: exceptions and results. Set the `Trap Handling` option in the importer to choose which one to use.

<Tabs>

<TabItem value="exceptions" label="Exception">

```csharp
try
{
    var value = wrapper.hello();
    Debug.Log("WASM Result: " + value);
}
catch (TrapException ex)
{
    Debug.LogError("WASM Trap: " + ex.Type);
}
```

</TabItem>

<TabItem value="result" label="Result">

```csharp
var result = wrapper.hello();
if (result.Type == ResultType.Ok)
{
    var value = result.Value;
    Debug.Log("WASM Result: " + value);
}
else
{
    Debug.Log("WASM Trap: " + result.TrapCode);
}
```

</TabItem>

</Tabs>