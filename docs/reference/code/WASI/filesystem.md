---
title: Virtual Filesystem
---

These WASI methods provide access to the file system.

## VirtualFileSystem

Provides a complete in-memory file system which can have "real" files and folders mapped into it, giving very fine grained control over WASM access to the file system.

:::tip

See [this documentation](/docs/basics/wasi/virtual_file_system.md) for more detail on using the `VirtualFileSystem`.

:::

## IVirtualFileSystem

The base interface for all WASI file system implementations. If the default implementation does not fit your use-case custom implementations can be built using this interface.

For more details on the methods in IVirtualFileSystem, please see the [WASI preview1 documentation](https://github.com/WebAssembly/WASI/blob/main/legacy/preview1/docs.md).