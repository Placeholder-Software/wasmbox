---
title: AssemblyScript
---

[AssemblyScript](https://www.assemblyscript.org/) is a typescript-like language designed for compiling to WebAssembly.

```typescript
export function fibonacci(n: i32): i32 {
    var a = 0, b = 1
    if (n > 0) {
        while (--n) {
            let t = a + b
            a = b
            b = t
        }
        return b
    }
    return a
}
```

## Advantages

 - Simple JavaScript/TypeScript inspired syntax.
 - Designed specifically for WebAssembly.
 - Uses NPM development tools.

## Drawbacks

 - [Removed](https://www.assemblyscript.org/standards-objections.html#wasi-2022-09) official support for WASI.
 - Not a well known language.
 - No large/established set of libraries to use.

## Resources
 - [Homepage](https://www.assemblyscript.org/)
 - [Documentation](https://www.assemblyscript.org/introduction.html)
 - [WASI shim](https://github.com/AssemblyScript/wasi-shim)
 - [as-wasi](https://github.com/jedisct1/as-wasi)
