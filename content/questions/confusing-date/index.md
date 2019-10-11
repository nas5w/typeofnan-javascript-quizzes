---
title: Confusing date constructor 
tags:
  - date
  - constructor
order: 48
date: '2019-10-11'
answers:
  - '1/1/2019 2/1/2019 // correct'
  - '1/1/2019 1/1/2019'
---

Consider the following code block which calls the Date constructor with 2 type of values. What will be the output of `console.log`

```javascript
let a = new Date("2019,1,1").toLocaleDateString();
let b = new Date(2019,1,1).toLocaleDateString();
console.log(a,b)
```

<!-- explanation -->

The Date constructor, `new Date(?date)` creates a date object at a given date or the current date if no date is given. It can be called in many ways. If the date is passed as a string, the created date will be as it is. If it is invoked with 3 separate values for `yyyy, mm ,dd` then the month will be incremented by one. Because while passing as 3 separate values, it'll be treated as index and the starting value is 0 (only for month). To get "1/1/2019" via this way, you have to invoke it as `new Date(2019,0,1)`.
