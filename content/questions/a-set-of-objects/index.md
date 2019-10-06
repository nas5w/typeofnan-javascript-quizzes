---
title: Array Compare
tags:
  - set
  - object
  - spread
order: 2
date: '2019-09-27'
answers:
  - 'true, true, false // correct'
  - 'true, true, true'
  - 'true, false, false'
  - 'false, false false'
---

Consider the following `Set` of objects spread into a new array. What gets logged?

```javascript
var a = [1, 2, 3];
var b = [1, 2, 3];
var c = '1,2,3';
```

<!-- explanation -->

Two non-primitive values, like objects (including function and array) held by reference, so both == and === comparisons will simply check whether the references match, not anything about the underlying values.

For example, arrays are by default coerced to strings by simply joining all the values with commas (,) in between. So two arrays with the same contents would not be == equal.
