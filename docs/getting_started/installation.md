---
title: Installation
sidebar_position: 3
---

import * as links from "@site/src/components/links.js"

## Requirements

Wasmbox currently requires:
 - Unity 2021.3.21 or greater
 - Scripting backend: Mono

:::warning
Wasmbox is not currently compatible with IL2CPP!
:::

## Installation Step-By-Step

1. Purchase Wasmbox on the <links.AssetStore />.
1. Open the package manager (Window > Package Manager).
2. Switch to `My Assets`.
3. Find `Wasmbox` in the list of assets.
4. Click `Download` or `Update`.
5. When the download is complete click `Import`.

:::note
The asset will be installed into `Assets/Plugins/PlaceholderSoftware/Wasmbox`
:::

## Optional Extras

### Assembly Definitions

If your application is using [Assembly definitions](https://docs.unity3d.com/Manual/ScriptCompilationAssemblyDefinitionFiles.html) to organise scripts you must add a reference to Wasmbox before you can use it.

To reference Wasmbox:
1. Select your `.asmdef` file
2. Add a new item to the `Assembly Definition References` list
3. Place `Wasmbox` into the new entry

### Addressables

Wasmbox can make use of the Unity [Addressable Asset System](https://docs.unity3d.com/Manual/com.unity.addressables.html) to asynchronously load content and to simplify managing WASM dependencies.

To use addressable loading:
1. Install `Addressables` 1.19 or greater.
2. Tick `Addressable Loading` when [importing](../reference/editor/import.md#6-code-generation) a WASM Asset.

:::caution

If asset is inside an [assembly definition](https://docs.unity3d.com/Manual/ScriptCompilationAssemblyDefinitionFiles.html) you must reference `Unity.ResourceManager` and `Unity.Addressables`.

:::

:::tip

Wasmbox [addressables loading tutorial](../basics/addressables.md).

:::