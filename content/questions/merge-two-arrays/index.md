---
title: Merge Two Arrays
tags:
  - array
order: 51
date: '2019-10-12'
answers: 
  - 'A'
  - 'B'
  - 'C // correct'
  - 'All of them'
---

Consider two arrays `a` and `b` below. Which option below is **NOT** correct to merge the arrays? 

```javascript
var a = [1,2,3];
var b = [4,5,6];

// A 
console.log(a.concat(b));    

// B
console.log([...a, ...b]);   

// C
console.log(a + b);
```

<!-- explanation -->

Option C does not properly merge the arrays, because the arithmetic operator `+` only sensibly applies to strings and numbers. Any side of a `+` which refers to something other than a string or number will be converted into a string first, so this would result in the string `'1,2,3'` being concatenated with the string `'4,5,6'`, or `'1,2,34,5,6'`.
