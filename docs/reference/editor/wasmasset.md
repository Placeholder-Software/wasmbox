---
title: WASM Asset
sidebar_position: 2
---

A `WasmAsset` is a WASM module which has been [imported](./import.md) from a `*.wasm` or `*.wat` file and converted into a form ready to load at runtime. For `WasmAsset` scripting documentation see [here](../code/wasmasset.md).

## WasmAsset Inspector

![WasmAsset Inspector](/img/WasmAssetInspector.png)

### WASM Exports

These sections show what is **exported** from the WASM module. Exports are things which can be accessed by C# scripts at runtime.
 - `Function Exports`: WASM Functions which can be called.
 - `Memory Exports`: Regions of memory (raw bytes) which can be read and written.
 - `Global Exports`: A single strongly typed value which can be read (and sometimes written).
 - `Table Exports`: A strongly typed table of values which can be read and written.

### WASM Imports

These section show what is **imported** by the WASM module. These things must be defined before the module can be instantiated and used.
 - `Function Imports`: A non-WASM function made available for WASM to call.
 - `Memory Imports`: A region of bytes which can be read and written by WASM.
 - `Global Imports`: A strongly typed values which can be read (and sometimes written) by WASM.
 - `Table Exports`: A strongly typed table of values which can be read and written by WASM.

### Compression

This section shows the results of precompiling and compressing the WASM bytes. The help box shows the overall reduction in size.

If `Compilation` is enabled [in the importer](./import.md/#4-compilation) the coloured bars show the space used by the compiled code for each different platform.