---
title: Virtual File System
---

Certain WASI methods provide access to a POSIX-like filesystem API, which allows WASM code to read/write files and folders. Wasmbox provides a complete in-memory file system which can have "real" files and folders mapped into it, giving very fine grained control over WASM access to the file system.

## Unsupported Features

The built in implementation does **not** currently support all features of the WASI FS specification. If you need any of the unsupported features please [contacts us](http://localhost:3000/wasmbox/getting_started/support/).

#### Symbolic Links

Symbolic Links are not yet implemented in the Wasmbox VFS.

#### File Descriptor Rights

File Descriptor Rights are due to be removed in future versions of the WASI spec ([wasi-filesystem#31](https://github.com/WebAssembly/wasi-filesystem/issues/31)). They are not implemented in the Wasmbox VFS.

## Creating A Virtual File System

A VFS instance can be created with a `VirtualFileSystemBuilder`. This builder allows you to easily define a complete file system hierarchy and then to add the result to the [`Linker`](./../linker.md):

```csharp
void CreateRoot(DirectoryBuilder root)
{
    root.CreateVirtualDirectory("A");

    root.CreateVirtualDirectory("B", dir => {
        dir.CreateInMemoryFile("File.txt");
        dir.MapFile("virtual.txt", "real.txt")
    });
}

var builder = new VirtualFileSystemBuilder()
    .WithVirtualRoot(CreateRoot)
    .Readonly(false);

linker.Define(builder.Build());
```

This example creates a file system like this:

```
.
├── A
└── B
    ├── File.txt
    └── virtual.txt
```

## Builder Methods

### VirtualFileSystemBuilder

The `VirtualFileSystemBuilder` is an easy way to construct an entire virtual file system. Method calls can be chained together.

#### `Build`

Builds the `VirtualFileSystem` object which can be passed into the `Linker`. The builder cannot be used after this point, any other calls will throw an `InvalidOperationException`.

#### `WithVirtualRoot(Action<DirectoryBuilder>)`

Set the "root" of the file system. Later calls to this method will overwrite earlier calls.

The `Action` passed in as a parameter will be called when `Build` is finally called. It is given a `DirctoryBuilder` which represents the root directory.

#### `WithPipes`

Configure the "pipes" to use for standard in, standard out and standard error. Each item can be set to null, which will set them to the default (an infinitely large file, full of zero bytes).

:::tip

The `UnityLog` file type can be used to redirect the output streams to the Unity log file:

```csharp
builder.WithPipes(null, new UnityLog("STDOUT"), new UnityLog("STDERR", error: true));
```

:::

#### `WithClock`

Set the clock which will be used by the file system for all time based operations (e.g. setting access time). Any WASI `IVirtualClock` implementation can be used as the clock.

#### `Readonly`

Set the **entire filesystem** as read only.

### DirectoryBuilder

The `DirectoryBuilder` is an easy way to construct a directory, containing files and other directories.

#### `CreateVirtualDirectory(string name, Action<DirectoryBuilder> content)`

Create a new child directory with the given `name`. Optionally the `content` callback defines the contents of the new directory.

```csharp
builder.CreateVirtualDirectory("ChildDirectoryName", child => {
    child.CreateInMemoryFile("File.txt");
});

builder.CreateVirtualDirectory("Empty_ChildDirectoryName");
```

#### `CreateInMemoryFile(string name, ReadOnlyMemory<byte>? content = null, bool isReadOnly = false)`

Create a new virtual (in memory) file in this directory with the given `name`. Optionally `content` sets the initial content of the file. Optionally `isReadonly` sets the file as read-only.

```csharp
builder
    .CreateInMemoryFile("File1")
    .CreateInMemoryFile("File2", Encoding.UTF8.GetBytes("Hello World"))
    .CreateInMemoryFile("File3", isReadonly: true);
```

#### `MapFile(string name, string hostPath)`

Create a new file in the virtual file system which is a real file on disk. All read/write operations will be passed through to the actual file.

:::danger

WASM code can read and write this file!

:::

#### `MapDirectory(string name, string hostPath, Action<DirectoryBuilder> content)`

Create a new directory in the virtual file system which is a real directory on disk. All read/write operations will be passed through to the actual file.

:::danger

WASM code can read and write this directory and all child files!

:::

### `MapReadonlyZipArchiveDirectory(string name, string hostPath)`

Create a new child directory with the given `name`. The contents are read from the zip archive located at `hostPath`.

:::warning

The mounted zip archive is read-only and **must not** be modified while mounted.

:::