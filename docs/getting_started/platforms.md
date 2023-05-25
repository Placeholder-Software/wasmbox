---
title: Platform Support
sidebar_position: 2
---

import * as links from "@site/src/components/links.js"

Wasmbox is built using the [Wasmtime](https://wasmtime.dev/) WebAssembly engine. Wasmbox supported platforms are derived from the Wasmtime [supported platforms](https://docs.wasmtime.dev/stability-tiers.html) policy.

## Editor Platforms

All editor features of Wasmbox should work in any of the platforms listed here. If you encounter an issue on any of these platforms please <links.IssueTracker>open an issue</links.IssueTracker>!

| Unity Platform  | Wasmtime Platform          | [Wasmtime Support Tier](https://docs.wasmtime.dev/stability-tiers.html) |
|-----------------|----------------------------|--------------|
| Windows         | `x86_64-pc-windows-msvc`   | Tier 1       |
| Linux           | `x86_64-unknown-linux-gnu` | Tier 1       |
| MacOS           | `x86_64-apple-darwin`      | Tier 1       |
| MacOS ARM       | `aarch64-apple-darwin`     | Tier 3       |

## Player Platforms

All runtime features of Wasmbox should work in any of the platforms listed here. If you encounter an issue on any of these platforms please <links.IssueTracker>open an issue</links.IssueTracker>!

| Unity Platform  | Wasmtime Platform          | [Wasmtime Support Tier](https://docs.wasmtime.dev/stability-tiers.html) |
|-----------------|----------------------------|--------------|
| Windows         | `x86_64-pc-windows-msvc`   | Tier 1       |
| Windows ARM     | `aarch64-pc-windows-msvc`  | Tier 3       |
| Linux           | `x86_64-unknown-linux-gnu` | Tier 1       |
| Linux ARM (Desktop) | `aarch64-unknown-linux-gnu`| Tier 2   |
| Linux ARM (Android) | **Unsupported (WIP)** | **None**   |
| MacOS           | `x86_64-apple-darwin`      | Tier 1       |
| MacOS ARM       | `aarch64-apple-darwin`     | Tier 3       |
| iOS             | **Unsupported**            | **None**     |

## Stability

According to the Wasmtime [release policy](https://docs.wasmtime.dev/stability-release.html) a new version is released every month, which _may_ include breaking changes. Wasmbox will frequently update to the latest version of Wasmtime, which may also include breaking changes. The impact of breaking changes will be minimised by using `[Obsolete]` attributes to mark out-of-date APIs, which will print a warning in the Editor when called.