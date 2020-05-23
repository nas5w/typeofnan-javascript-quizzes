---
title: Using Array#flat 
tags:
  - array
  - es2019
  - flat
order: 47
date: '2019-10-10'
answers:
  - '[1, 2, 3, 4, 5, 6, [7], 8, 9, 10, 12] // correct'
  - '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]'
---

Consider the following nested array. What will get logged?

```javascript
const array = [1,[2,[3,[4,[5,[6,[7],8],9],10]]],12];
const result = array.flat(5);
console.log(result);
```

<!-- explanation -->

The `Array#flat` introduced in ES2019 will flatten an array up to the given depth level. If the depth is unknown, `Infinity` can be passed. If no depth is provided, the default depth will be 1. Passing 0 will return the array without modification.
