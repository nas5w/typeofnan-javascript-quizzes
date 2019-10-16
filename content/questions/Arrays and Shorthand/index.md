---
title: Arrays and Shorthand.
tags:
  - shorthand
  - array
order: 44
date: '2019-10-08'
answers: 
  - '[1, 3, 5, 7, 25]
[7, 5, 3, 25, 1]
[1, 25, 3, 5, 7]
[1, 25, 3, 5, 7]'
  - '[1, 25, 3, 5, 7]
[5,1,3,7,25]'
  - '[1, 25, 3, 5, 7]
[7, 5, 3, 25, 1]
[7, 5, 3, 25, 1]
[7, 5, 3, 25, 1] // correct'
  - 'An error is thrown'
---

Consider the following two arrays and operations on them. What gets logged as a result of script execution ?

```javascript
const ar = [5,1,3,7,25];
const ar1 = ar;
console.log(ar1.sort());
[5, 25].indexOf(ar[1]) != -1 && console.log(ar.reverse()) || ar[3] == 25 && console.log(ar);
console.log(ar1);
```

<!-- explanation -->

Remember that in Javascript you operate on arrays by references. If ar is assigned to ar1 in fact ar1 shows te same point in memory as ar. Therefore console.log(ar1.sort()) sorts both arrays ar and ar1. The sorted array looks as follows [1, 25, 3, 5, 7], beacuse sorting arrays operates on strings although array have integer elements. Next : ar[1] is found in [5,25] therefore ar.reverse is logged , then ar[3]==25 is true - ar is logged.
