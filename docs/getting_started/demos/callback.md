---
title: Callback Demo
sidebar_position: 4
---

This scene demonstrates how to register a callback - C# code which can be called by WASM code.

The `Demo Object` has a `CallbackDemoScript` attached. Every frame this calls `run`. The `run` function is defined in WASM and simply calls `hello`, which is a function imported by the WASM.

The `ConfigureLinker` method is used to `Define` a callback function, called `hello`. Read more about using the [`Linker`](./../../reference/code/wasmtime/linker.md) [here](./../../basics/linker.md).