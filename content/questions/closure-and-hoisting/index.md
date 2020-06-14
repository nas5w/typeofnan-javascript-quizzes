---
title: Closure and Hoisting
tags:
  - closure
  - hoisting
order: 58
date: Mon Oct 21 2019 22:49:13 GMT-0600 (Mountain Daylight Time)
answers:
  - 'undefined ERROR 42'
  - '24 ERROR 24'
  - '24 24 42 // correct'
  - 'undefined ERROR 24'
  - '24 Error 42'
---

What would be the output of the following three `console.log`s?

```javascript
function withVar() {
  const b = () => a;
  var a = 24;
  return b;
}

function withLet() {
  const b = () => a;
  let a = 24;
  return b;
}

function changingValue() {
  let a = 24;
  const b = () => a;
  a = 42;
  return b;
}

console.log(withVar()());  // ??
console.log(withLet()());  // ??
console.log(changingValue()());  // ??
```

<!-- explanation -->
Definition: A "closure" is said to occur when a function remembers and accesses its lexical scope, even when it is executed outside of that scope. [Definition by Kyle Simpson in YDKJS](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch5.md).

When the internal functions `b` are returned from all the three functions, each function `b` gets a "closure" over the value of `a` defined in its parent function's scope. However, the value of `a` closed over by `b` in all cases is the "latest" value of `a`, or in other words, `b` has closure over the variable `a` itself, not its value. Hence, even when the value of `a` is changed, `b` always has the most recent value assigned to `a`.

That is why, in `withVar`, even though `a` is undefined when `b` is first defined, however, by the time `b` is executed (inside the `console.log`), the value of `a` has been updated to `24`, and that is what is returned by `b` . Similarly, in `withLet`, the `a` variable is no longer in the "Temporal Dead Zone" by the time `b` is executed. And finally, the "updated" value of `a` is returned by `changingValue`.

This example also demonstrates that the code inside a JS function does not "run" till the function is actually invoked (by using the parens, like `withVar()`). That is why, in `withVar` and `withLet`, even though function `b` returns `a`, which at that line is not declared at all. But the code actually only runs when `b` is invoked in their respective `console.log`s.
