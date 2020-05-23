---
title: Floating-Point Precision
tags:
  - floating-point
  - decimal
  - rounding
order: 39
date: '2019-10-07'
answers: 
  - 'true'
  - 'false // correct'
---

Consider the following scenario. What gets logged?

```javascript
const a = 0.1;
const b = 0.2;
const c = 0.3;

console.log(a + b === c);
```

<!-- explanation -->

In computing, decimal numbers as we know them are most commonly represented using floating-point arithmetic. Floating-point numbers only approximate real numbers and cannot accurately represent numbers like `0.1`, `0.2` or `0.3` at all. In the case of `0.1 + 0.2`, this results in small rounding errors before we even get to the addition part. The final sum then equals to `0.30000000000000004`.

Similarly, the decimal system cannot represent `1/3` (one third) accurately. And if we took a rounded value like `0.333`, you wouldn't expect `0.333 + 0.333 + 0.333` to add up to `1`, either.