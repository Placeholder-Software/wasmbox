---
title: Random
---

The WASI random number generation interfaces allows WebAssembly code to generate random numbers.

## FastRandomSource

Generates pseudo random numbers using [`System.Random`](https://learn.microsoft.com/en-us/dotnet/api/system.random?view=netframework-4.7.1&f1url=%3FappId%3DDev16IDEF1%26l%3DEN-US%26k%3Dk(System.Random)%3Bk(TargetFrameworkMoniker-.NETFramework%2CVersion%253Dv4.7.1)%3Bk(DevLang-csharp)%26rd%3Dtrue).

`FastRandomSource` accepts a `seed` value in the constructor, supplying the same seed will produce exactly the same sequence of random numbers. This can be used to ensure WASM execution is deterministic.

:::caution

`System.Random` is not cryptographically secure. Do not use `FastRandomSource` for a WASM container which does any cryptography.

:::

## CryptoRandomSource

Generates pseudo random numbers using [`System.Security.RandomNumberGenerator`](https://learn.microsoft.com/en-us/dotnet/api/system.security.cryptography.randomnumbergenerator?view=netframework-4.7.1&f1url=%3FappId%3DDev16IDEF1%26l%3DEN-US%26k%3Dk(System.Security.Cryptography.RandomNumberGenerator)%3Bk(TargetFrameworkMoniker-.NETFramework%2CVersion%253Dv4.7.1)%3Bk(DevLang-csharp)%26rd%3Dtrue).

:::tip

`System.Security.RandomNumberGenerator` is approximately 50x slower than `System.Random`.

:::

## IVirtualRandomSource

The base interface for all WASI RNG implementations. If the default RNGs do not fit your use-case custom implementations can be built using this interface

#### `WasiError RandomGet(Caller caller, Buffer<byte> output)`

Fill `Buffer` with random data and return `WasiError.SUCCESS` to indicate success.

#### `void Register(Linker linker)`

Add all functions of this implementation to the [Linker](../wasmtime/linker.md). This can usually be implemented as a direct call to `linker.Register(this);`.