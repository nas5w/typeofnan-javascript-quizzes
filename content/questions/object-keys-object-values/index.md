---
title: Object Keys, Object Values
tags:
  - object
  - object.keys
  - object.values
order: 16
date: '2019-09-29'
answers:
  - 'true'
  - 'false // correct'
---

Consider the following object.

```javascript
const obj = {
  1: 1,
  2: 2,
  3: 3
};
```

Is `Object.keys` equal to `Object.values`?

```javascript
console.log(Object.keys(obj) == Object.values(obj));
```

<!-- explanation -->

In this case, `Object.keys` converts the keys to be string `["1", "2", "3"]` and `Object.values` gives `[1, 2, 3]`. Even if the values turn out to be the same type, the two arrays are both different objects in memory, so the equality comparison will return `false`. You will see a lot of quiz questions here drilling into the concepts of object and array comparison!
