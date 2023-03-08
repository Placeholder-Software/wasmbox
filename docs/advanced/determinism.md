---
title: Determinism
sidebar_position: 1
---

WebAssembly (WASM) is deterministic in that it guarantees that the execution of a given module with the same input values will always produce the same output values, regardless of the platform or implementation used to run the module. This means that the execution of a WebAssembly module is predictable and reproducible. 

However, it is possible to beak the determinism guarantees of WASM through several features ([read more](https://github.com/WebAssembly/design/blob/main/Nondeterminism.md)):
 - SIMD
 - WASI
 - Threads

## SIMD

SIMD (Single Instruction Multiple Data) instructions can potentially bring a huge speedup to heavily mathematical code. However, the exact semantics of SIMD may differ slightly when run on different hardware platforms.

:::tip

To ensure deterministic execution across all platforms ensure that SIMD is **disabled**.

:::

To disable SIMD you must check the [importer precompile settings](../reference/editor/import.md#4-compilation) and also the [EngineConfig](../reference/code/engineconfig.md#simd) used an runtime.

## WASI

WASI (Web Assembly System Interface) provides access to system resources such as clocks, random numbers and the file system. All of these resources are non-deterministic by.

Wasmbox provides multiple implementations of most WASI features, some of which can be used to provide determinism. For example the [Random Number Generator](../reference/code/WASI/random.md) has two implementations: [CryptoRandomSource](../reference/code/WASI/random.md#cryptorandomsource) provides truly random numbers (non-deterministic) and the [FastRandomSource](../reference/code/WASI/random.md#fastrandomsource) provides pseudo random numbers from a seed value (deterministic).

## Threads

[`wasm-threads`](https://github.com/WebAssembly/proposals/issues/14) is a proposed extension to WASM which adds support for multiple execution threads. It is not supported within Wasmbox.