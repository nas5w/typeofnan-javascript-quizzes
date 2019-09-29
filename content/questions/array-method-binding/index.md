---
title: Array Method Binding
tags:
  - array
  - map
  - bind
order: 11
date: '2019-09-29'
answers:
  - '1 2 3 // correct'
  - 'a b c'
  - 'An error is thrown'
  - 'Something else'
---

What gets logged in the following scenario?

```javascript
const map = ['a', 'b', 'c'].map.bind([1, 2, 3]);
map(el => console.log(el));
```

<!-- explanation -->

`Object.bind` will bind the `this` keyword to the provided value (in this case, that's `[1, 2, 3]`).
