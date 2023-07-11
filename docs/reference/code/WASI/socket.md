---
title: Socket
---

The WASI socket interfaces allows WebAssembly code to interact with the network.

:::caution

Wasmbox does not currently implement the WASI socket interface.

:::

## NonFunctionalSocket

Does not do anything and will return an error code to WASM code which calls it (as if no network connection is available). This can be used when loading WASM files which requires the socket imports, but do not actually use them at runtime.

## IVirtualSocket

The base interface for all WASI socket implementations. If the default implementation does not fit your use-case custom implementations can be built using this interface.

#### `WasiError Accept(Caller caller, FileDescriptor fd, FdFlags flags)`

Accept a new incoming connection request.

#### `WasiError Receive(Caller caller, FileDescriptor fd, Buffer<Buffer<byte>> riData, RiFlags riFlags, Pointer<byte> roDataPtr, Pointer<RoFlags> roFlagsOut);`

Receive a message from a socket.

#### `WasiError Send(Caller caller, FileDescriptor fd, Buffer<Buffer<byte>> siData, SiFlags siFlags, out int sentBytes);`

Send a message on a socket.

#### `WasiError Shutdown(Caller caller, FileDescriptor fd, SdFlags how);`

Shut down socket send and/or receive channels.

#### `void Register(Linker linker)`

Add all functions of this implementation to the [Linker](../wasmtime/linker.md). This can usually be implemented as a direct call to `linker.Register(this);`.