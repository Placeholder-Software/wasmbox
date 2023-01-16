---
title: Memory
---

A `Memory` represents a contiguous array of bytes. The `Memory` class is a wrapper around the [`wasmtime::Memory`](https://docs.rs/wasmtime/latest/wasmtime/struct.Memory.html) struct.

## Properties

### `long PageSize`

Get the number of bytes in a page of memory.

### `long Minimum`

Get the minimum size of this memory in pages. The memory will always be at least `Minimum * PageSize` bytes in size.

### `long? Maximum`

Get the maximum size of this memory in pages, or `null` if there is no maximum.

### `bool Is64Bit`

Check if this memory represents a 64 bit memory (capable of representing more than 4GB).

## Methods

### Size

#### `long GetSize()`

Get the current size of this memory in pages.

#### `long GetLength()`

Get the current size of this memory in bytes.

#### `Grow(long delta)`

Grow the memory by `delta` pages.

:::caution

This will invalidate any pointers or spans which refer to this memory.

:::

### Read/Write

#### `Read<T>(long address)`/`Write<T>(long address, T value)`

:::warning

WebAssembly is always **little endian**, on big endian platforms numeric values must be converted accordingly.

:::

Read or write an `unmanaged` object of type `T` from the given address.

#### `ReadString(long address, int length)`

Read a string starting at the given address, with the given length in bytes. Defaults to UTF8 encoding.

#### `WriteString(long address, string value)`

Write a string to the given address. Defaults to UTF8 encoding.

#### `ReadNullTerminatedString(long address)`

Read bytes starting at address until a zero is encountered, interprets those bytes as a UTF8 string.

#### `ReadDouble`/`WriteDouble`

Read or write a `double` to the given address, automatically converting endianness if necessary.

#### `ReadSingle`/`WriteSingle`

Read or write a `float` to the given address, automatically converting endianness if necessary.

#### `ReadIntPtr`/`WriteIntPtr`

Read or write an `IntPtr` (4 bytes or 8 bytes, depending on the host platform), automatically converting endianness if necessary.

#### `ReadInt64`/`WriteInt64`

Read or write a `long` to the given address, automatically converting endianness if necessary.

#### `ReadInt32`/`WriteInt32`

Read or write a `int` to the given address, automatically converting endianness if necessary.

#### `ReadInt16`/`WriteInt16`

Read or write a `int` to the given address, automatically converting endianness if necessary.

#### `ReadByte`/`WriteByte`

Read or write a `byte` to the given address.

### Get Pointer

:::warning

These methods return a pointer/Span which refers directly to the memory. These pointers can become invalid if `Grow()` is called or if any `WASM` is executed.

You should always acquire a new pointer/Span when external code executes and never store them.

:::

### `unsafe IntPtr GetPointer()`

Get a pointer to the start of the memory.

### `Span<byte> GetSpan(long address, int length)`

Get a span of bytes which points to a section of memory.

### `Span<byte> GetSpan(long address)`

Get a span of bytes which starts at the given address and is as long as possible (4GB or to the end of the memory, whichever is smaller).

### `Span<T> GetSpan<T>(long address, int length)`

Get a span which interprets a region of memory as a sequence of `unmanaged` type `T`.