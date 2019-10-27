---
title: Array Method Callbacks
tags:
  - array
  - callbacks
order: 58
date: Sun Oct 20 2019 15:26:39 GMT-0700 (Pacific Daylight Time)
answers: 
  - '5'
  - '4'
  - '1'
  - '0 // correct'
---
What is returned from the following `console.log`?

```javascript
let i = 0;

const arr = new Array(5);
arr.forEach(() => i++);

console.log(i);
```


<!-- explanation -->

Array methods like `map`, `filter`, `reduce`, `forEach`, etc take a callback as the first parameter, which is executed for every element in the array. The Array constructor, when given an integer between 0 and (2^32 - 1), will return a sparse array, which has a length property equal to the given integer. The returned array is "sparse" because its slots are empty (it does not contain actual elements equal to `undefined`).