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

What gets logged in the following code?

```javascript
let i = 0;

const arr = new Array(5);
arr.forEach(() => i++);

console.log(i);
```

<!-- explanation -->

Array methods like `map`, `filter`, `reduce`, `forEach`, etc take a callback as the first parameter, which is executed for every element in the array. The Array constructor, when given an integer between 0 and (2<sup>32</sup> - 1), will return a sparse array, which has a length property equal to the given integer. The returned array is "sparse" because its slots are empty; it does not have any own-properties, other than `.length`. (In contrast, the array `[undefined]` *does* have an own-property of `0`, even though the value at that property is `undefined`.)
