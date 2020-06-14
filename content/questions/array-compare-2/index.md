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

When using `==` to compare an array with a number, JavaScript tries to coerce the array to a number, which is possible when the array contains a single numeric value. Here, `[9]` turns into `9`, and `[10]` turns into `10`, and `9 == 9` and `10 == 10` are both `true`.

When comparing arrays with `<` or `>`, the arrays are instead coerced to strings (`[9] < [10]` turns into `'9' < '10'`). When comparing strings, JavaScript uses lexicographical order, which means the strings are compared to each other one character at a time. The first characters that are different are the ones at the `[0]`th index, so the comparison done is `"9" < "1"`, which is false.
