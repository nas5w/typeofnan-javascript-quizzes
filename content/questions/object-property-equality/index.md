---
title: Object Property Equality
tags:
  - object
  - property
order: 18
date: '2019-09-29'
answers:
  - 'true // correct'
  - 'false'
---

`a` and `b` are different objects with the same `firstname` property. Are these properties strictly equal to each other?

```javascript
const a = {
  firstname: 'Bill'
};

const b = {
  firstname: 'Bill'
};

console.log(a.firstname === b.firstname);
```

<!-- explanation -->

The answer is yes, they are. `a.firstname` is the string value `Bill` and `b.firstname` is the string value `Bill`. Two identical strings are always equal.
