---
title: Array-to-Object Efficiency
tags:
  - array
  - object
  - spread
  - reduce
order: 14
date: '2019-09-29'
answers:
  - 'a'
  - 'b // correct'
---

Both `a` and `b` are objects with the same properties and values. Which is created more efficiently?

```javascript
const arr = [1, 2, 3];

const a = arr.reduce(
  (acc, el, i) => ({ ...acc, [el]: i }),
  {}
);

const b = {};
for (let i = 0; i < arr.length; i++) {
  b[arr[i]] = i;
}
```

<!-- explanation -->

When `b` is being set, the `b[arr[i]]` property is set to the current index on each loop. When `a` is being set, the spread operator (`...`) will create a shallow copy of the accumulator object (`acc`) on each loop and additionally set the new property. This shallow copy is more expensive than not performing a shallow copy. Therefore, `b` is being set more efficiently.
