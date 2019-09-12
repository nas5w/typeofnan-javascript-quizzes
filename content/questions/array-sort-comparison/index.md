---
title: Array Sort Comparison
tags: arrays, sort, comparison
order: 1
right: false false false
wrong:
  - true true true
  - true true false
  - true false true
---

What gets logged?

```javascript
const arr1 = ['a', 'b', 'c'];
const arr2 = ['b', 'c', 'a'];

console.log(
  arr1.sort() === arr1,
  arr2.sort() == arr2,
  arr1.sort() === arr2.sort()
);
```

## Explanation

Some _explanation_ here
