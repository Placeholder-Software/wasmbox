---
title: Process
---

These WASI methods virtualise a Windows/Linux style "process".

## VirtualProcess

Provides a basic implementation of the process interface which triggers a callback when WASM calls `proc_exit`.

## IVirtualProcess

The base interface for all WASI process implementations. If the default implementation does not fit your use-case custom implementations can be built using this interface.

#### `void ProcExit(Caller caller, uint code)`

Terminate the process normally. An exit code of 0 indicates successful termination of the program.

#### `WasiError SchedulerYield(Caller caller)`

Temporarily yield execution of the calling thread. If [async WASM](./../../../advanced/asyncify.md) is in use this will unconditionally yield execution.

#### `void Register(Linker linker)`

Add all functions of this implementation to the [Linker](../wasmtime/linker.md). This can usually be implemented as a direct call to `linker.Register(this);`.