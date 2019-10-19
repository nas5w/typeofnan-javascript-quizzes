---
title: Array Method Binding
tags:
  - array
  - map
  - bind
order: 11
date: '2019-09-29'
answers:
  - '123 // correct'
  - 'abc'
  - 'An error is thrown'
  - 'Something else'
---

What gets logged in the following scenario?

```javascript
const reduce = ['a', 'b', 'c'].reduce.bind([1, 2, 3]);
reduce((acc, cur) => acc + cur, '');
```

<!-- explanation -->

`Object.bind` will bind the `this` keyword to the provided value (in this case, that's `[1, 2, 3]`).
