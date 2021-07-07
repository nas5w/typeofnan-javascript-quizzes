---
title: Equal equals 
tags:
  - operators
order: 72
date: Mon Oct 28 2019 22:28:52 GMT-0600 (Central Standard Time)
answers: 
  - 'true true false'
  - 'false false false'
  - 'false false true // correct'
  - 'true true true'
---

Consider the following comparisons. What gets logged?

```javascript
console.log(1 === 1 === 1);
console.log(2 === 1 + 1 === 2);
console.log(true === true === true);
```

<!-- explanation -->
The equality operator is still an operator such as `+`, `-`, `&&`, etc... And they (`===`) return a boolean value. So, the first operation can be translated to `true === 1`, which result is `false`; remember that is fair to say that `===` also compares type of value. The third operation is valid because `(true === true) === true`. Take a look into [Operators Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) for a widely better explanation.
