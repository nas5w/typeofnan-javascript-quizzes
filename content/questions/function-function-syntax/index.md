---
title: Function Function Syntax
tags:
  - function
  - hof
order: 20
date: '2019-09-29'
answers:
  - 'Yes // correct'
  - 'No'
---

Let's say `myFunc` is a function, `val1` is a variable, and `val2` is a variable. Is the following syntax allowed in JavaScript?

```javascript
myFunc(val1)(val2);
```

<!-- explanation -->

This is a common pattern for a higher-order function. If `myFunc(val1)` returns a function, then that function will be called with `val2` as an argument. Here's an example of this in action that you can try out:

```javascript
const timesTable = num1 => {
  return num2 => {
    return num1 * num2;
  };
};

console.log(timesTable(4)(5));
// 20
```
