---
title: Identity Crisis
tags:
  - comparison
  - object
  - equality
order: 58
date: Fri Oct 25 2019 14:27:00 GMT+0300 (Eastern European Summer Time)
answers: 
  - 'true true true true'
  - 'true false true true'
  - 'true true false true // correct'
  - 'true true false false'
  - 'false false false false'
---

Consider the following comparison function and its applications. What gets logged?

```javascript
const compare = a => a === a;

console.log(compare(null));
console.log(compare(undefined));
console.log(compare(NaN));
console.log(compare([NaN]));
```

<!-- explanation -->

Out of all JavaScript values, `NaN` aka Not-A-Number is the only one that compares unequal to every other value, including itself.

Note that `[NaN]` is just a regular array that contains a single element so it will be always equal to itself.
