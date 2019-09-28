---
title: Object Ordering
tags:
  - object
  - properties
order: 5
date: '2019-09-27'
answers:
  - 'eohll'
  - 'hello // correct'
  - 'Order not guaranteed'
---

Consider the following object. What gets logged after reducing its values?

```javascript
const scrambled = {
  2: 'e',
  5: 'o',
  1: 'h',
  4: 'l',
  3: 'l'
};

const result = Object.values(scrambled).reduce(
  (agg, el) => agg + el,
  ''
);

console.log(result);
```

<!-- explanation -->

Object ordering is actually guaranteed in JavaScript! Numeric keys are sorted in order and string keys are preserved in the order they're added. In this case, we have all numeric keys. Sorting them in numeric order, we get the word `hello`!
