---
title: Array Compare
tags:
  - array
  - reference
  - comparison
order: 31
date: '2019-10-06'
answers:
  - 'true, true, false // correct'
  - 'true, true, true'
  - 'true, false, false'
  - 'false, false false'
---

Consider the following variables. What gets logged?

```javascript
var a = [1, 2, 3];
var b = [1, 2, 3];
var c = '1,2,3';

console.log(a == c);
console.log(b == c);
console.log(a == b);
```

<!-- explanation -->

Two non-primitive values, like objects (including function and array) held by reference, so both == and === comparisons will simply check whether the references match, not anything about the underlying values.

For example, arrays are by default coerced to strings by simply joining all the values with commas (,) in between. So two arrays with the same contents would not be == equal.
