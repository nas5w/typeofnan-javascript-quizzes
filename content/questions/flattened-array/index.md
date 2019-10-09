---
title: Using Array#flat 
tags:
  - array
  - es2019
  - flat
order: 2
date: '2019-10-10'
answers:
  - '[1, 2, 3, 4, 5, 6, [7], 8, 9, 10, 12] // correct'
  - '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]'
---

Consider the following array get a with depth 5, what will get logged.

```javascript
const _array = [1,[2,[3,[4,[5,[6,[7],8],9],10]]],12]
const result = _array.flat(5)
console.log(result);
```

<!-- explanation -->

The Array#flat introduced in ES 2019 will flatten an array at the given depth level. If the depth is unknown, `Infinity` can be given. If no depth provided, the default depth will be 1. The value of depth starts from 1. 0 will return the array as it is.
