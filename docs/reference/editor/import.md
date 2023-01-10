---
title: Importing WebAssembly
sidebar_position: 1
---

WasmBox includes an import pipeline for WASM assets which validates, initialises, optimises, precompiles and compresses the WASM. Any `*.wasm` (binary WebAssembly) or `*.wat` (text WebAssembly) files will automatically be processed and imported through this pipeline into a [WasmAsset](wasmasset.md).

## 1. Validation

Files will be parsed and validated before any further processing. Any errors in the file will print an error to the console.

## 2. Initialisation

If `Preinitialization` is ticked the WASM will be processed through [Wizer](https://github.com/bytecodealliance/wizer). Wizer instantiates your WebAssembly module, executes its initialization function, and then snapshots the initialized state out into a new WebAssembly module.

:::caution

Wizer does not support all WASM features and not all modules can be pre-initialized by Wizer. If Wizer fails to run for a file a warning will be printed to the console and it will be disabled for this file.

:::

:::tip Inspector Options

![Preinitialize Inspector](/img/WizerPreinitializeInspector.png)

 - `Initialize Export Name`
    - Set the name which Wizer will call to initialize the WASM module.
    - Refer to Wizer docs for [example usage](https://github.com/bytecodealliance/wizer#example-usage).
    - Refer to Wizer docs for [caveats](https://github.com/bytecodealliance/wizer#caveats).
 - `Exposed Wasi Directories`
    - A set of directory paths which will be **fully readable and writeable** during initialization.
    - These directories are **only** accessible during wizer initialization.

:::

## 3. Optimisation

If `Optimization` is ticked the WASM will be processed through [Binaryen](https://github.com/WebAssembly/binaryen#wasm-opt). `Binaryen` is an optimizer which applies [a larger number of optimisation passes](https://github.com/WebAssembly/binaryen#binaryen-optimizations) to produce to better (faster/smaller) WASM.

:::caution

Binaryen does not support all WASM features and not all modules can be optimized by Binaryen. If Binaryen fails to run for a file a warning will be printed to the console and it will be disabled for this file.

:::

:::tip Inspector Options

![Optimization Inspector](/img/BinaryenOptimizationInspector.png)

 - `Binaryen Optimization Level`
    - Set the optimization level:.
        - `None`: Do not optimise (equivalent to disabling optimisation).
        - `O1`/`O2`/`O3`/`O4`: Optimize for speed. Higher levels spend **significantly** longer optimising.
        - `Size`: Optimize mostly for speed.
        - `Extreme Size`: Optimize for absolutely minimum code size.
 - `Binaryen Fast Math`: Optimize floating point maths without properly handling corner cases of NaNs and rounding.

:::

## 4. Compilation

If `Compilation` is ticked the WASM will be pre-compiled into native machine code for all active platforms. This increases the asset size (often by a factor of 10x or more) but can reduce loading times at runtime.

If compilation is **disabled** WASM will be stored in a "Universal" format and compiled at when loaded. If compiled code cannot be loaded for some reason (e.g. incompatible architecture) the runtime loading will fall back to using the universal version.

:::tip Inspector Options

![Optimization Inspector](/img/CompilationInspector.png)

 - `Fuel Usage`: Compile with support for [Fuel Usage](/basics/fuelusage.md).
 - `Epoch Interruption`: Compile with support for [Epoch Interruption](/basics/epochinterruption.md).
 - `Cranelift Compiler Settings`: Enable specific feature flags in the [cranelift](https://github.com/bytecodealliance/wasmtime/tree/main/cranelift) compiler. The CPU used at runtime must support these features for the precompiled WASM to be loaded, if they are not supported the `Universal` fallback will be used instead (equivalent to not precompiling).

:::

## 5. Compression

Compress the final WASM to reduce size, this can reduce loading time if storage is slow.

:::tip Inspector Options

![Optimization Inspector](/img/CompressionInspector.png)

 - `Compression Level`
    - Set the amount of work the compressor will do. This corresponds to [this option](https://learn.microsoft.com/en-us/dotnet/api/system.io.compression.compressionlevel?view=netstandard-2.0) in the .NET compressor.
        - `Optimal`: Optimally balance compression speed and output size.
        - `Fastest`: Compress as quickly as possible, even if the resulting file is not as small as possible.
        - `No Compression`: No compression should be performed on the file.
 - `Compression Algorithm`:
    - Brotli: Powerful compression algorithm which usually provides the best compression but is slower to compress and decompress than deflate.
    - Deflate: Simple & fast compression algorithm. Usually does not compress as much as Brotli but is often faster to compress and decompress.

:::

## 6. Code Generation

If `Generate C# Wrapper Code` is ticked a script will be generated which wraps up the WASM module in a C# accessor. This handles many of the "low level" details of interacting with a WASM module.

**todo: link to code gen docs**

:::caution

Do not edit the auto generated code! It may be re-generated at any time, which will overwrite your changes.

:::

:::tip Inspector Options

![Optimization Inspector](/img/CodeGenerationInspector.png)

 - Naming
    - `Namespace`: C# namespace for the generated wrapper code.
    - `Type Name`: Name of the generated wrapper type.
    - `Visibility`: Visibility access modifier (`public`/`internal`) to apply to the generated wrapper type.
    - `Addressable Loading`: Generate a `CreateAsync` method which loads the WASM asset using the [Unity Addressable Asset System](https://docs.unity3d.com/Packages/com.unity.addressables@0.8/manual/index.html).
 - Error Handling
    - `Trap Handling`: Choose if a WASM Trap throws a C# exception (slow, generates garbage) or returns a `Result` (fast, usually no garbage).
    - `Stack Frames`: Choose if the `Result` object records the stacktrace of the WASM Trap. This can help with debugging but requires allocating space to store the stacktrace.
 - Exports
    - `Wrap Exported Functions`: Generate a wrapper for every callable [function](https://webassembly.github.io/spec/core/syntax/modules.html#functions) exported from the WASM module.
    - `Wrap Exported Globals`: Generate a wrapper for every [global](https://webassembly.github.io/spec/core/syntax/modules.html#syntax-global) exported from the WASM module.
    - `Wrap Exported Memory`: Generate a wrapper for every [memory](https://webassembly.github.io/spec/core/syntax/modules.html#syntax-mem) exported from the WASM module.
    - `Wrap Exported Tables`: Generate a wrapper for every [table](https://webassembly.github.io/spec/core/syntax/modules.html#syntax-table) exported from the WASM module.

:::