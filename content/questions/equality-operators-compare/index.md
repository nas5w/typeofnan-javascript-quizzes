---
title: Equality operetors
tags:
  - operator
  - property
order: 33
date: '2019-10-5'
answers:
  - 'true'
  - 'false // correct'
---

`a` and `b` are two constants. What will be the output on the console?

```javascript
const a = '42';
const b = 42;

console.log((a == b) && (a === b));
```

<!-- explanation -->

The answer is false, (a == b) will come up as true as it does check the type. However, (a === b) will be false as it does check the type. Hence, ((a == b) && (a === b)) will be false.
