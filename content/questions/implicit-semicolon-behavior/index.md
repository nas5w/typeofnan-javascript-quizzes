---
title: Implicit semicolon behavior
tags:
  - semicolon
  - implicit
  - print
order: 73
date: Mon, 27 Jan 2020 17:28:48 GMT
answers: 
  - '[1, 2]'
  - '[1, 2, 3]'
  - 'ReferenceError // correct'
---

What does this snippet of code print?

```javascript
let array = [1, 2]

(array).push(3)

console.log(array)
```


<!-- explanation -->
Javascript would normally add a semicolon after the `let
array` line, however `(array)` is seen as calling a function
and javascript actually reads `let array = [1, 2](array).push(3)`.

There is a ReferenceError because the variable `array` is used
inside its definition. If it used var instead, javascript would
attempt to call `[1, 2]` which is a TypeError.
