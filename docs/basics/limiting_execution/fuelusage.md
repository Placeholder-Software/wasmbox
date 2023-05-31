---
title: Fuel Usage
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

When executing WASM code it is sometimes useful to set a limit on how long it can run for. This can be used to prevent potentially malicious or buggy code from running forever and slowing down your application. Wasmbox includes two mechanisms to do this, [Epoch Interruption](./epochinterruption.md) and [Fuel Usage](./fuelusage.md).

Fuel usage is easier to use than epochs and provides **exact** control over the number of instructions that are allowed to run.

:::tip
Fuel usage is easier to use than epochs but is slower to execute.
:::

## Using Fuel

All WASM code is executed within the context of a [`Store`](/docs/reference/code/wasmtime/store.md). [Add fuel](/docs/reference/code/wasmtime/store.md#void-addfuelulong-fuel) to the [`Store`](/docs/reference/code/wasmtime/store.md) before executing WASM code.

When the execution runs out of fuel it will cause a "Trap" which is returned to the caller. A trap is either returned as an exception or a result, this can be configured in the [code generation settings](/docs/reference/editor/import.md#7-code-generation) when importing a WASM asset.

:::tip

How to get access to the `Store` depends on which technique you used to load the WASM. For example in the `SimpleWasmMonoBehaviour` you can just use `base.Store`

:::

<Tabs>
<TabItem value="Exception" label="Exception" default>

```csharp
// Add some fuel to the store
store.AddFuel(42);

// Try to run some WASM in this store
try
{
    RunSomeWasm(store);
    Successul();
}
catch (TrapException ex)
{
    // Handle the out-of-fuel exception
    if (ex.Type == TrapCode.OutOfFuel)
    {
        Debug.LogError("Oh no! Ran out of fuel");
    }
    else
    {
        Debug.LogError("Oh no! WASM Trap: " + ex.Type);
    }
}
```

</TabItem>
<TabItem value="Result" label="Result">

```csharp
// Add some fuel to the store
store.AddFuel(42);

var result = RunSomeWasm(store);

if (result.Type == ResultType.Trap)
{
    if (result.TrapCode == TrapCode.OutOfFuel)
    {
        Debug.LogError("Oh no! Ran out of fuel");
    }
    else
    {
        Debug.LogError("Oh no! WASM Trap: " + ex.Type);
    }
}
else
{
    Successul();
}
```

</TabItem>
</Tabs>