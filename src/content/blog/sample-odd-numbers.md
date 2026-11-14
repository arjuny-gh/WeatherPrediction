---
title: "Why the first n odd numbers add up to n² (sample post)"
description: A sample post showing LaTeX equations — replace with your own writing.
date: 2026-01-15
tags: [mathematics, proofs]
sample: true
---
This is a **sample** post showing how math renders. Delete it when you publish your own.

Add the first few odd numbers: $1 + 3 + 5 + 7 = 16 = 4^2$. Does this always work?

## Claim

$$
\sum_{k=1}^{n} (2k-1) = n^2
$$

## Proof by induction

For $n = 1$, the sum is $1 = 1^2$. Suppose it holds for $n$. Then

$$
\sum_{k=1}^{n+1} (2k-1) = n^2 + (2(n+1)-1) = n^2 + 2n + 1 = (n+1)^2.
$$

So it holds for $n+1$, and by induction for all $n \ge 1$. $\blacksquare$
