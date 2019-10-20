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

`a` and `b` are different objects with the same `firstName` property. Are these properties strictly equal to each other?

```javascript
const a = {
  firstName: 'Bill'
};

const b = {
  firstName: 'Bill'
};

console.log(a.firstName === b.firstName);
```

<!-- explanation -->

The answer is yes, they are. `a.firstName` is the string value `Bill` and `b.firstName` is the string value `Bill`. Two identical strings are always equal.
