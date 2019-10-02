---
title: Map letters to numbers
tags:
  - array
  - map
order: 23
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

A `map` will iterate over each item in a list replacing the item with some returned value. In this example, each letter is replaced by a corresponding object's key value pair.
