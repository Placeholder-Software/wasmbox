---
title: Table
---

A `Table` represents a list references which cannot be stored as bytes in [`Memory`](./memory.md) for safety and portability reasons.. The `Table` class is a wrapper around the [`wasmtime::Table`](https://docs.rs/wasmtime/latest/wasmtime/struct.Table.html) struct.

## Properties

### `ValueKind Kind`

Get [kind](./valuekind.md) of values stored in this table.

### `uint Minimum`

Get the minimum number of elements in this table.

### `uint Maximum`

Get the maximum number of elements in this table.

## Methods

### `object? GetElement(uint index)`

Get the value (may be `null`) at the given index.

### `void SetElement(uint index, object? value)`

Set the value at the given index (may be `null`).

### `uint GetSize()`

Get the current number of elements in the table.

### `uint Grow(uint delta, object? initialValue)`

Grow the table, adding `delta` copies of `initialValue` to the table. Returns the previous size of the table.