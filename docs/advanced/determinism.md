---
title: Determinism
---

Determinism is a core design goal of assembly, the same WASM code should produce the same results when executed on any platform. You can read more about the design of determinism in WebAssembly [here](https://github.com/WebAssembly/design/blob/main/Nondeterminism.md).

Within Wasmbox there are a two main sources of non-determinism:
 - SIMD
 - WASI

## SIMD

SIMD (Single Instruction Multiple Data) instructions can potentially bring a huge speedup to heavily mathematical code. However, the exact semantics of SIMD may differ slightly when run on different hardware platforms.

:::tip

To ensure deterministic execution across all platforms ensure that SIMD is **disabled**.

:::

To disable SIMD you must check the [importer precompile settings](../reference/editor/import.md#4-compilation) and also the [EngineConfig](../reference/code/engineconfig.md#simd) used an runtime.

## WASI

WASI (Web Assembly System Interface) provides access to system resources such as clocks, random numbers and the file system. All of these resources are non-deterministic by.

Wasmbox provides multiple implementations of most WASI features, some of which can be used to provide determinism. For example the [Random Number Generator](../reference/code/WASI/random.md) has two implementations: [CryptoRandomSource](../reference/code/WASI/random.md#cryptorandomsource) provides truly random numbers (non-deterministic) and the [FastRandomSource](../reference/code/WASI/random.md#fastrandomsource) provides pseudo random numbers from a seed value (deterministic).