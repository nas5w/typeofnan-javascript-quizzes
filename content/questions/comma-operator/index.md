---
title: Comma Operator
tags:
  - operator
order: 72
date: Sat May 02 2020 18:45:16 GMT+0700 (Indochina Time)
answers: 
  - '6'
  - '27 // correct'
  - '15'
  - '28'
---

Consider the following code block. What gets logged?

```javascript
let x = 5;
function addFive(num) {
  return num + 5;
}
x = (x++ , x = addFive(x), x *= 2, x -= 5, x += 10);
console.log(x)
```

<!-- explanation -->

The comma operator (,) evaluates each of its operands (from left to right) and returns the value of the last operand. The result = (((6 + 5) * 2) - 5) + 10 = 27.

