---
title: "A tiny Euler method in Python (sample post)"
description: A sample post showing syntax-highlighted code — replace with your own writing.
date: 2026-01-20
tags: [programming, physics]
sample: true
---
Sample post demonstrating code blocks. To simulate $\frac{dy}{dt} = f(t, y)$ step by step:

```python
def euler(f, t0, y0, dt, steps):
    t, y = t0, y0
    for _ in range(steps):
        y += dt * f(t, y)
        t += dt
    return t, y

# exponential decay: dy/dt = -y
print(euler(lambda t, y: -y, 0.0, 1.0, 0.01, 100))
```
