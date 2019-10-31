---
title: Array Compare - 2
tags:
  - array
  - comparison
  - type coercion
order: 58
date: Wed Oct 23 2019 23:39:34 GMT-0700 (Pacific Daylight Time)
answers: 
  - 'true true true'
  - 'false false false'
  - 'true true false // correct'
  - 'false false true'
---

Consider the following block of code. What gets logged?

```javascript
var a = [9];
var b = [10];

console.log(a == 9);
console.log(b == 10);
console.log(a < b);
```

<!-- explanation -->

When using `==` to compare an array with a number, JavaScript coerces the array to a number, which results in the first element in the array being converted to a number (`[9]` -> `9`). Therefore `9 == 9` and `10 == 10` are both `true`.

When comparing arrays with `<` or `>`, the arrays are instead coerced to strings (`[9]` -> `"9"`). When comparing strings, JavaScript uses lexicographical order, which means the strings are compared to each other 1 character at a time. Therefore the first comparison is `"9" < "1"`, which is false.
