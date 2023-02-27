---
title: C/C++
---

C and C++ are two of the most well known and widely used languages in the world.

```clike
#include <stdio.h>

static int the_meaning = 42;

int main() 
{
    printf("The mean of life is: %d", the_meaning);
}
```

## Advantages
 - Huge ecosystem is existing code, much of which can be compiled for WASM
 - Small binary sizes
 - Great performance

## Drawbacks
 - C++ exceptions and threads are not yet supported
 - Not all libraries can be compiled for WASM


## Resources
 - [Homepage](https://cplusplus.com/)
 - [Documentation](https://cplusplus.com/reference/)
 - [WASI SDK](https://github.com/WebAssembly/wasi-sdk)
 - [WASI libc](https://github.com/WebAssembly/wasi-libc)
 - [Compiler Playground](https://godbolt.org/z/r43W3jGnz)
 - [Emscripten](https://emscripten.org/index.html)
 - [MDN Emscripten Guide](https://developer.mozilla.org/en-US/docs/WebAssembly/C_to_wasm)
 - [Fermyon WASM/C Guide](https://www.fermyon.com/wasm-languages/c-lang)