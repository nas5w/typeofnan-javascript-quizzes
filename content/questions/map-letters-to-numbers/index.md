---
title: Map letters to numbers
tags:
  - array
  - map
order: 24
date: '2019-10-01'
answers:
  - '1, 2, 3'
  - 'a, b, c'
  - '[1, 2, 3] // correct'
  - '[a, b, c]'
---

Consider the following mapping. What gets logged?

```javascript
const myArr = ['a', 'b', 'c'];
const myMap = { a: 1, b: 2, c: 3 };

const result = myArr.map(letter => myMap[letter]);
console.log(result);
```

<!-- explanation -->

The `map` method will create a new array from an existing array by performing a specified transformation on each array item. In this example, each letter is replaced by a corresponding object's value.
