---
title: Fuel Usage Demo
sidebar_position: 3
---

This scene demonstrates the use of Fuel with <b>Wasmbox</b> to limit execution time.

The `Demo Object` has a `FuelUsageScript` attached. Each second this calculates the Fibonacci value of a random number. Fibonacci is very slow to calculate for large values. "Fuel" is used to limit the maximum amount of time the WASM can spend executing.

1. Inspect `Demo Object`.
    - Note that `Fuel Usage` is enabled, this is required to run WASM code with fuel.
2. Open `FuelUsageScript.cs`.
    - Each second the coroutine calculates a new value.
    - If execution runs out of fuel a `TrapException` is thrown.