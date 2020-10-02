---
title: declaration with let keyword
tags:
  - declaration
  - let
order: 75
date: Fri Oct 02 2020 12:34:34 GMT+0530 (India Standard Time)
answers:
  - 'apple //correct'
  - 'orange'
  - 'compilation error'
  - 'undefined'
---

What is the output of the last console.log below?

```javascript
let fruit = 'apple';

{
  let fruit = 'orange';
  console.log(fruit);
}

console.log(fruit);
```

<!-- explanation -->

let respects block scopes. This means the two fruit variables are two different variables.
