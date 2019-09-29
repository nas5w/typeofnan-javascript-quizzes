---
title: IIFE, HOF, or Both
tags:
  - iife
  - hof
order: 13
date: '2019-09-29'
answers:
  - 'IIFE only'
  - 'HOF only'
  - 'Both IIFE and HOF // correct'
  - 'Neither'
---

Does the following snippet illustrate an Immediately-Invoked Function Expression (IIFE), a Higher-Order Function (HOF), both, or neither?

```javascript
((fn, val) => {
  return fn(val);
})(console.log, 5);
```

<!-- explanation -->

The snippet clearly illustates an IIFE as we immediately invoke a function by passing `console.log` and `5` to it. Additionally, we find that this is a HOF as `fn` is a function, and a HOF is defined as any function that takes another function as a parameter or returns a function.
