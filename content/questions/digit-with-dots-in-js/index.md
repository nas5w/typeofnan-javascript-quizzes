---
title: Digit with dots
tags:
  - numbers
  - properties
order: 44
date: '2019-10-08'
answers: 
  - '[1, 2, 3, 4, 5]'
  - 'undefined // correct'
  - 'Syntax error'
---

What is the return of the following `console.log`?

```javascript
const n = 5;

console.log(1..n); // ?
```

<!-- explanation -->

There is no syntax error or array constructor. Variable `n` need not. We are just trying to access property `n` (via second dot) of a number `1.` (is the short variant of `1.0`).

To more info see the block [Two dots to call a method](https://javascript.info/number#tostring-base).