---
title: Function Equality
tags:
  - function
  - equality
order: 18
date: '2019-09-29'
answers:
  - 'true true'
  - 'true false'
  - 'false true // correct'
  - 'false false'
---

What gets logged when we test the following equality scenarios?

```javascript
const a = c => c;
const b = c => c;

console.log(a == b);
console.log(a(7) === b(7));
```

<!-- explanation -->

In the first test, `a` and `b` are different objects in memory; it doesn't matter that the parameters and return values in each function definition are identical. Therefore, `a` is not equal to `b`. In the second test, `a(7)` returns the number `7` and `b(7)` returns the number `7`. These primitive types are strictly equal to each other.

In this case, the equality (`==`) vs identity (`===`) comparison operators don't matter; no type coercion will affect the result.
