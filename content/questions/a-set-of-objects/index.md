---
title: A Set of Objects
tags:
  - set
  - object
  - spread
order: 2
date: '2019-09-27'
answers:
  - '[{a: 1}, {a: 1}] // correct'
  - '[{a: 1}]'
---

Consider the following `Set` of objects spread into a new array. What gets logged?

```javascript
const mySet = new Set([{ a: 1 }, { a: 1 }]);
const result = [...mySet];
console.log(result);
```

<!-- explanation -->

While it's true a `Set` object will remove duplicates, the two values we create our `Set` with are references to different objects in memory, despite having identical key-value pairs. This is the same reason `{ a: 1 } === { a: 1 }` is `false`.

It should be noted if the set was created using an object variable, say `obj = { a: 1 }`, `new Set([ obj, obj ])` would have only one element, since both elements in the array reference the same object in memory.
