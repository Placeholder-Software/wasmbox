---
title: WASI
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

WASI stands for **WebAssembly System Interface**. It's a spec that provides access to several operating-system-like features such as filesystems, clocks, and random numbers. Wasmbox provides implementations of most WASI functions (see `Assets\Plugins\PlaceholderSoftware\Wasmbox\Core\WASI\`).

WASI provides _controlled_ access to certain system resources. For example the virtual file system implemented by Wasmbox can provide in-memory files (which are never saved) as well as expose _parts_ of the real file system, allowing you to carefully control exactly what can and cannot be accessed through WASM code. These features can allow untrusted or malicious code to be run safely.

:::caution

WASM execution is normally completely [deterministic](../advanced/determinism.md). Adding WASI features can easily break this, since it provides access to external resources which are not deterministic.

:::

## WASI Features

WASM Assets which require a WASI function will show a `WASI` indicator next to the function. Hovering over the indicator will show which WASI feature is required to supply this import, clicking the indicator will bring you to this this documentation page. All WASI features are interfaces which you may implement yourself, or you can use one of the built in implementations.

![WASI Import](../../static/img/InspectorWasi.png)

<Tabs queryString="feature-name">

<TabItem value="ivirtualrandomsource" label="Random Numbers">

Random number generation is provided by an implementation of [`IVirtualRandomSource`](../reference/code/WASI/random.md).

```csharp
var rng = new CryptoRandomSource();
linker.Define(rng);
```

</TabItem>

<TabItem value="ivirtualprocess" label="Process">

Functions which would normally be associated with an OS "Process" are provided by an implementation of [`IVirtualProcess`](../reference/code/WASI/process.md).

```csharp
var proc = new VirtualProcess(OnExit);
linker.Define(proc);

void OnExit(uint code)
{
    Debug.Log("Process exited with code: " + code);
}
```

</TabItem>

<TabItem value="ivirtualfilesystem" label="File System">

Functions which provide access to the filesystem are provided by an implementation of [`IVirtualFileSystem`](../reference/code/WASI/filesystem.md). The default implementation provides an entire "virtual filesystem" which can have a mix of real files/folders with fully virtual files/folders which are stored in memory.

```csharp
// Use a "VirtualFileSystemBuilder" to define a fake file system entirely in memory
var builder = new VirtualFileSystemBuilder()
    .WithVirtualRoot(root => {
        root.CreateVirtualDirectory("A")
            .CreateVirtualDirectory("B", dir => {
                dir.CreateInMemoryFile("File.txt");
            })
    });

linker.Define(builder.Build());
```

</TabItem>

<TabItem value="ivirtualenvironment" label="Environment">

Functions which would normally be associated with an OS "Environment" are provided by an implementation of [`IVirtualEnvironment`](../reference/code/WASI/environment.md).

```csharp
var env = new VirtualEnvironment()
    .PassthroughEnvironmentVariables()                      // Add all of the real environment variables
    .SetEnvironmentVariable("foo", "bar")                   // Create a variable named "foo" with value "bar"
    .SetArgs("--foo", "--bar", "bash", "-b", "-a", "-z"));  // Set the WASM process arguments

linker.Define(env);
```

</TabItem>

<TabItem value="ivirtualclock" label="Clock">

Functions which get the current system time are provided by an implementation of [`IVirtualClock`](../reference/code/WASI/clock.md). A `RealtimeClock` provides access to the real system time (with an optional offset). A `ManualClock` provides access to a specific time which only advances when `clock.Tick()` is called.

```csharp
var clock = new RealtimeClock();
linker.Define(clock);
```

</TabItem>

<TabItem value="unknown" label="Unknown Feature">

Not all WASI functions are supported by the built in Wasmbox WASI features. Please contacts us on [Discord](https://discord.gg/3RtDa2M9Bx) or on the [Issue Tracker](https://github.com/Placeholder-Software/wasmbox/issues) about the specific feature you need.

</TabItem>

</Tabs>

---