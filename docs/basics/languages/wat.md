---
title: Web Assembly Text
---

[Web Assembly Text](https://webassembly.github.io/spec/core/text/index.html) (WAT) is a direct text representation of WASM code.

```wasm
(module
  (func (export "add") (param i32 i32) (result i32)
    local.get 0
    local.get 1
    i32.add))
```

## Advantages

 - Direct representation of WebAssembly instructions.
 - Imported in editor by Wasmbox, no compilation step needed.

## Drawbacks

 - Hand writing assembly.

## Resources
 - [Web Assembly Text](https://webassembly.github.io/spec/core/text/index.html)
 - [Wasmtime Guide](https://docs.wasmtime.dev/wasm-wat.html)
 - [MDN documentation](https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format)
