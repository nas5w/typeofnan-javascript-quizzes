---
title: Equality and Identity Operators  
tags:
  - operators
order: 57
date: Sun Oct 20 2019 12:14:42 GMT-0700 (Pacific Daylight Time)
answers: 
  - 'true, false // correct'
  - 'true, true'
  - 'false, true'
  - 'false, false'
---

Consider the following equality comparison. What gets logged?

```javascript
var x = 5;
var y = "5";

console.log(x == y);
console.log(x === y);
```

<!-- explanation -->

The equality operator `==` first converts operands to the same types before doing a strict comparison, so that's why `x == y` logs `true`. The identity operator "===" *only* carries out a strict comparision; there is no type conversion. `x === y` therefore returns `false` because `x` and `y` do not share the same type.
