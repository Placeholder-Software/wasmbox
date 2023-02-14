---
title: Introduction To WebAssembly
sidebar_position: 1
---

[WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly) is a new type of low-level binary format, like assembly language, designed to be run in a virtual machine. Compiled languages such as C, C++ and Rust can be compiled directly to WebAssembly and run inside the sandbox, providing high performance, deterministic execution, portability across different platforms, and protection against malicious code.

**Wasmbox** provides a complete WebAssembly runtime for Unity (based on the [Wasmtime](https://wasmtime.dev/) engine) which can be used to run non C# code on **[many platforms](./platforms.md)**, to **sandbox** malicious or buggy code (e.g. mods) and to provide **[deterministic execution](./../advanced/determinism.md)** (e.g. lockstep multiplayer).

## Getting Started

todo: list of wasmbox getting started tutorials

## Compiling To WebAssembly

todo: compiling
 - [C](https://developer.mozilla.org/en-US/docs/WebAssembly/C_to_wasm) (emscripten?)
 - [C++](https://developer.mozilla.org/en-US/docs/WebAssembly/existing_C_to_wasm) (emscripten?)
 - [Rust](https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm)
 - [WAPM](https://wapm.io/)