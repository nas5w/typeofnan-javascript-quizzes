---
title: String Interpolation
tags:
  - strings
  - interpolation
  - template literals
order: 54
date: Fri Oct 18 2019 22:06:13 GMT+0530 (India Standard Time)
answers: 
  - "Soon we must all choose between what is right and what is easy"
  - "Soon we must all choose between what is right and what is difficult // correct"
  - "Soon we must all choose between what is wrong and what is easy"
  - "Soon we must all choose between what is wrong and what is difficult"
---

What's the value of `output`?

```javascript
const output = `Soon we must all choose between what is ${[] ? 'right' : 'wrong'} and what is ${(() => false) ? 'difficult' : 'easy'}`;
```

<!-- explanation -->

As `[]` is a truthy value, the first conditional evaluates to `'right'`.

With the second conditional operator, we created a function `() => false`, but never called it. Functions, like all objects, are truthy values is JavaScript, hence `'difficult'` is the result.
