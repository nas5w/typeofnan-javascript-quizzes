---
title: Array Compare
tags:
  - array
  - reference
  - comparison
order: 36
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

When comparing either `a` or `b` to `c` using the equality operator (`==`), the JavaScript interpreter will attempt to use the array's built-in `toString` method to first convert the array to a string. For both `a` and `b`, the `a.toString()` method returns `'1,2,3'`. This is strictly equal to `c`, so both `a == c` and `b == c` are `true`!

Non-primitive values - that is, objects (including functions and arrays) are held by reference. When comparing two objects both the equality (`==`) and identity (`===`) operators will simply check whether the references match (the underlying values are not considered). In this case, `a` and `b` are references to different objects in memory, so `a == b` is `false`.
