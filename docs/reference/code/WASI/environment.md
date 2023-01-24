---
title: Environment
---

These WASI methods virtualise an environment which the WASM code is executing within (environment variables and arguments).

## VirtualEnvironment

Provides a basic implementation of an environment that can be configured before use.

#### `SetEnvironmentVariable(string key, string? value = null)`

Set the given environment variable (`key`) to the given value (`value`). If `value` is null the variable is deleted.

#### `PassthroughEnvironmentVariables()`

Copy **all** real environment variables into the WASI context.

#### `SetArgs(params string[] args)`

The the arguments to the given strings.

## IVirtualEnvironment

The base interface for all WASI environment implementations. If the default implementation does not fit your use-case custom implementations can be built using this interface.

#### `WasiError EnvironGetSizes(Caller caller, Pointer<uint> argNum, Pointer<uint> dataLen)`

Get information about the number of environment variables. Write the total number of variables into `argNum`. Write the total length of all variables into `dataLen`.

:::tip

Each individual item must be encoded into UTF8 and null terminated. e.g. `Key=Value\0`

:::

#### `WasiError EnvironGet(Caller caller, ReadonlyPointer<Pointer<uint>> environ, Pointer<byte> environBuffer);`

Get all of the environment variables. Write out pointers to the start of each item into this `environ`. Write out all of the environment data into this buffer (UTF8 encoded, null terminated. e.g. `Key=Value\0`). The buffer will be the size previously returned from `EnvironGetSizes`.

#### `WasiError ArgsGetSizes(Caller caller, Pointer<uint> argNum, Pointer<uint> dataLen)`

Get information about the number of argument variables. Write the total number of variables into `argNum`. Write the total length of all variables into `dataLen`.

:::tip

Each individual item must be encoded into UTF8 and null terminated. e.g. `--foo\0`

:::

#### `WasiError ArgsGet(Caller caller, ReadonlyPointer<Pointer<uint>> environ, Pointer<byte> environBuffer)`

Get all of the argument variables. Write out pointers to the start of each item into this `environ`. Write out all of the environment data into this buffer (UTF8 encoded, null terminated. e.g. `Key=Value\0`). The buffer will be the size previously returned from `ArgsGetSizes`.

#### `void Register(Linker linker)`

Add all functions of this implementation to the [Linker](../wasmtime/linker.md). This can usually be implemented as a direct call to `linker.Register(this);`.