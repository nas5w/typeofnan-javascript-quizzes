---
title: Equality and Identity Operators
tags:
  - operator
  - property
order: 34
date: '2019-10-5'
answers:
  - 'true'
  - 'false // correct'
---

`a` and `b` are two constants. What will be the output on the console?

```javascript
const a = '42';
const b = 42;

console.log((a == b) && (a === b));
```

<!-- explanation -->

The answer is `false`. `a == b` uses the "equality" operator, which will convert the operands to the same type prior to performing the comparison. In this case, `42 == '42'` will become `42 === 42`, which is `true`.

However, `a === b` uses the "identity" operator, and no such type conversion happens. Therefore, `42 === '42'` is `false`.  Hence, `(a == b) && (a === b)` becomes `true && false`, which is `false`.
