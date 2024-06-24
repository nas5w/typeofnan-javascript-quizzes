---
title: Using Array#filter
tags:
  - array
  - filter
order: 72
date: Tue Oct 29 2019 07:57:45 GMT-0500 (Central Daylight Time)
answers:
  - '[2, 3, 4, 5, 6]'
  - '[1, 3, 5]'
  - '[2, 4, 6] // correct'
---

Consider the following array get a with depth 5, what will get logged.

```javascript
const array = [1, 2, 3, 4, 5, 6];
const result = array.filter(x => x % 2 === 0);
console.log(result);
```

<!-- explanation -->

Array#filter takes in a function which returns a boolean and is executed with every value in the array. For every invocation of the function that returns true, the item will be kept and returned in a new resulting array.
