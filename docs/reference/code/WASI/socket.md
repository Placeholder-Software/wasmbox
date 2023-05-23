---
title: Socket
---

The WASI socket interfaces allows WebAssembly code to interact with the network.

:::caution

Wasmbox does not currently implement the WASI socket interface.

:::

## NonFunctionalSocket

Does not do anything and will return an error code to WASM code which calls it. This can be used when loading WASM files which requires the socket imports, but do not actually use them at runtime.