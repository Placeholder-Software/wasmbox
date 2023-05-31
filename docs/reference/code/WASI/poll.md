---
title: Event Polling
---

These WASI methods provide access to event polling, which allows WASM execution to be suspended until an event happens.

:::note

Using WASM event polling requires [asyncify](./../../../advanced/asyncify.md), to allow WASM execution to be suspended and resumed later.

:::

## VirtualEventPoll

Provides a polling system compatible with [`IVirtualClock`](./clock.md) (for time based events) and [`IVirtualFileSystem`](./filesystem.md) (for file based events).

The `IVirtualFileSystem` parameter is optional, if `null` is passed all file based events will return an error.

## IVirtualEventPoll

The base interface for all WASI event polling implementations. If the default implementation does not fit your use-case custom implementations can be built using this interface.

For more details on the methods in IVirtualEventPoll, please see the [WASI preview1 documentation](https://github.com/WebAssembly/WASI/blob/main/legacy/preview1/docs.md).