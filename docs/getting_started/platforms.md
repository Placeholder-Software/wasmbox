---
title: Platform Support
sidebar_position: 4
---

Wasmbox is built using the [Wasmtime](https://wasmtime.dev/) WebAssembly engine. Wasmbox supported platforms are derived from Wasmtime [supported platforms](https://docs.wasmtime.dev/stability-tiers.html).

## Editor Platforms

| Unity Platform  | Wasmtime Platform          | Support Tier |
|-----------------|----------------------------|--------------|
| Windows         | `x86_64-pc-windows-msvc`   | Tier 1       |
| Linux           | `x86_64-unknown-linux-gnu` | Tier 1       |
| MacOS           | `x86_64-apple-darwin`      | Tier 1       |
| MacOS ARM       | `aarch64-apple-darwin`     | Tier 3       |

All features of Wasmbox should work in any of the platforms listed here. If you encounter an issue on any of these platforms please [open an issue](https://github.com/Placeholder-Software/wasmbox/issues)!

## Player Platforms

| Unity Platform  | Wasmtime Platform          | Support Tier |
|-----------------|----------------------------|--------------|
| Windows         | `x86_64-pc-windows-msvc`   | Tier 1       |
| Windows ARM     | `aarch64-pc-windows-msvc`  | Tier 3       |
| Linux           | `x86_64-unknown-linux-gnu` | Tier 1       |
| Linux ARM (Desktop) | `aarch64-unknown-linux-gnu`| Tier 2   |
| Linux ARM (Android) | `aarch64-unknown-linux-gnu`| Tier 3   |
| MacOS           | `x86_64-apple-darwin`      | Tier 1       |
| MacOS ARM       | `aarch64-apple-darwin`     | Tier 3       |
| iOS             | **Unsupported**            | **None**     |

All features of Wasmbox should work in any of the platforms listed here. If you encounter an issue on any of these platforms please [open an issue](https://github.com/Placeholder-Software/wasmbox/issues)!

## Stability

According to the Wasmtime [release policy](https://docs.wasmtime.dev/stability-release.html) a new version is released every month, which _may_ include breaking changes. Wasmbox will frequently update to the latest version of Wasmtime, which may also include breaking changes. The impact of breaking changes will be minimised by using `[Obsolete]` attributes to mark out-of-date APIs, which will print a warning in the Editor when called.