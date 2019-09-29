---
title: Object Property Mutation
tags:
  - object
  - mutation
order: 21
date: '2019-09-29'
answers:
  - '{ firstName: "Joe" }'
  - '{ firstName: "Pete" } // correct'
---

Consider objects `a` and `b` below. What gets logged?

```javascript
const a = { firstName: 'Joe' };
const b = a;
b.firstName = 'Pete';
console.log(a);
```

<!-- explanation -->

When we set `b = a` in the second line, `b` and `a` are pointing to the same object in memory. Changing the `firstName` property on `b` will therefore change the `firstName` property on the only object in memory, so `a.firstName` will reflect this change.
