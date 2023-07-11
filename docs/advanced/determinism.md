---
title: Determinism
sidebar_position: 1
---

WebAssembly (WASM) is deterministic - it guarantees that the execution of a given module with the same input values will always produce the same output values, regardless of the platform or implementation used to run the module. This means that the execution of a WebAssembly module is predictable and reproducible.

Wasmbox includes a checkbox on the [importer](./../reference/editor/import.md#1-general) which configures the importer pipeline (optimiser and compiler) to allow non-deterministic code.

:::note

By default the output of the importer pipeline will be deterministic. Non-determinism must be deliberately _enabled_.

:::

## WASI

[WASI](./../basics/wasi/index.md) provides WebAssembly code with access to a large set of features, some of which may introduce non-determinism. For example the realtime clock provides access to the actual time, which changes every time it is read, this is non-deterministic. All Wasmbox WASI implementations can be made to act deterministically:

 - [IVirtualRandomSource](./../reference/code/WASI/random.md):
   - `CryptoRandomSource` is truly random (non-deterministic).
   - `FastRandomSource` is seeded pseudo-random (deterministic).
 - [IVirtualClock](./../reference/code/WASI/clock.md):
   - `RealtimeClock` provides the real time (non-deterministic).
   - `ManualClock` only "ticks" when specifically instructed to (deterministic).
 - [IVirtualEnvironment](./../reference/code/WASI/environment.md):
   - `VirtualEnvironment` is deterministic if the real environment variables are not exposed (`PassthroughEnvironmentVariables()`).
 - [IVirtualFileSystem](./../reference/code/WASI/filesystem.md):
   - `VirtualFileSystem` is deterministic if the real filesystem is not exposed.
 - [IVirtualEventPoll](./../reference/code/WASI/poll.md):
   - `VirtualEventPoll` depends on the clock and the file system, it is deterministic if they are.
 - [IVirtualProcess](./../reference/code/WASI/process.md):
   - `VirtualProcess` is always deterministic.
 - [IVirtualSocket](./../reference/code/WASI/socket.md):
   - `NonFunctionalSocket` is always deterministic.

## Threads

[`wasm-threads`](https://github.com/WebAssembly/proposals/issues/14) is a proposed extension to WASM which adds support for multiple execution threads. It is not currently supported within Wasmbox.