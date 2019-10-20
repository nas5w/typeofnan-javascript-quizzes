---
title: Arrow Function
tags:
  - arrow functions
  - functions
  - binding
order: 51
date: Sun Oct 20 2019 11:41:13 GMT-0700 (Pacific Daylight Time)
answers: 
  - "a"
  - "b"
---
Can you guess what is the correct usage?

```javascript
//a
let arr = [5,9,2];
let plus_one = arr.map(n => n+1);

//b
let arr = [5,9,2];
let plus_one = arr.map(n ==> n+1);
```

// <!-- explanation -->

Arrow functions allow us to write shorter function syntax. If you have parameters, you pass them inside the parentheses, but if you only have one paramenter you can skip the parentheses like in the example above. 



