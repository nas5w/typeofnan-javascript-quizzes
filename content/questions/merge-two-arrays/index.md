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

Option C in this case is the right choice, because the arithmetic operator `+` only works for numeric values and not arrays. 
