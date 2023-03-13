---
title: What Is WebAssembly?
sidebar_position: 1
---

[**WebAssembly**](https://developer.mozilla.org/en-US/docs/WebAssembly) (WASM) is a new type of low-level binary format, like assembly language, designed to be run in a virtual machine. Compiled languages such as C, C++ and Rust can be compiled directly to WebAssembly and run inside the sandbox, providing high performance, deterministic execution, portability across different platforms, and protection against malicious code.

**Wasmbox** provides a complete WebAssembly runtime for Unity (based on the [Wasmtime](https://wasmtime.dev/) engine) which can be used to run non-C# code on **[many platforms](./platforms.md)**, to **sandbox** malicious or potentially buggy code (e.g. mods) and to provide **[deterministic execution](./../advanced/determinism.md)** (e.g. lockstep multiplayer).

## Benefits Of WebAssembly

WebAssembly is an official W3C standard, completely described in [this specification](https://webassembly.github.io/spec/core/intro/introduction.html). This is a very large and complex document which you do _not_ need to completely understand to benefit from using WebAssembly and Wasmbox! Instead the main benefits of WebAssembly can be understood from the initial [design goals](https://webassembly.github.io/spec/core/intro/introduction.html#design-goals):

 - **Fast**
   - None of the other benefits matter if WASM is too slow to use!
   - WASM is designed for "near native" performance, currently achieving around 0.75x native speed [in benchmarks](https://programming-language-benchmarks.vercel.app/wasm-vs-csharp).
 - **Safe/Secure**:
   - All WASM code is validated and executes in a completely memory-safe sandbox.
   - **No program** can break out and access anything outside of the sandbox.
 - **Deterministic**:
   - WASM code execution is deterministic, producing the same results every time no matter what hardware it is running on.
   - [Read more](./../advanced/determinism.md) about guaranteed determinism in Wasmbox.
 - **Cross Platform**:
   - The same WASM code can be used on **[many platforms](./platforms.md)**.
   - Avoid compiling native dependencies for all [20+ Unity platforms](https://support.unity.com/hc/en-us/articles/206336795-What-platforms-are-supported-by-Unity-) by compiling just to WASM.
 - **Open**:
   - The WebAssembly System Interface (WASI) [specification](https://wasi.dev/) extends WASM with safe/secure ways to access resources (e.g. the filesystem).
   - Wasmbox includes an implementation of WASI, including a complete "Virtual File System" (in memory).