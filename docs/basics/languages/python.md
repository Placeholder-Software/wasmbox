---
title: Python
---

[Python](https://www.python.org/) is one of the most widely used scripting languages in the world.

Unlike [Rust](./rust.md) or [C++](./cplusplus.md) Python is an interpreted language that cannot be run directly in WASM, instead the interpreter is compiled to run in WASM. This means that new scripts can easily be loaded and run with no compile step.

```python
def hi():
    print("Hello World!")
```

## Advantages
 - Very well known.
 - Easy to use.
 - Interpreted language allows new scripts to be loaded with no compile step.

## Drawbacks
 - Slow.

## Resources
 - [Homepage](https://www.python.org/)
 - [Documentation](https://docs.python.org/3/)
 - [python-wasi](https://github.com/singlestore-labs/python-wasi)
 - [Fermyon](https://www.fermyon.com/wasm-languages/python)
 - [wagi-python](https://github.com/fermyon/wagi-python)