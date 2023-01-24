---
title: Clock
---

These WASI methods provide access to the time.

## RealtimeClock

Provides access to real time - this clock automatically ticks as time passes.

## ManualClock

Provides access to time which only progresses when a `Tick` method is explicitly called.

:::tip

Use this clock when determinism is required.

:::

#### `void Tick(TimeSpan elapsed)`

Progress time by the given amount.

## IVirtualClock

The base interface for all WASI clock implementations. If the default implementations do not fit your use-case custom implementations can be built using this interface.

#### `WasiError TimeGet(Caller caller, ClockId id, ulong precision, Pointer<ulong> retValue);`

Get the current time according to this clock. Write the result into `retValue`.

#### `void Register(Linker linker)`

Add all functions of this implementation to the [Linker](../wasmtime/linker.md). This can usually be implemented as a direct call to `linker.Register(this);`.