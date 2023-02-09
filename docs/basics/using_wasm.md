---
title: Using WASM In Scripts
sidebar_position: 0
---

todo:basic usage of WASM

1. Extend `SimpleWasmMonoBehaviour<>`
2. Pass wrapper type as generic `<WasmUUtils.WasmUUtils>`
3. Override `protected override void ConfigureLinker(Linker linker)`
4. In editor, set `Wasm Asset` to the relevant asset
5. In editor, configure engine
6. Call `Wrapper.Whatever()`