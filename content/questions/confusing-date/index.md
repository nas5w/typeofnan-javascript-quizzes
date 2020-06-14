---
title: Date Constructor 
tags:
  - date
  - constructor
order: 49
date: '2019-10-11'
answers:
  - '1/1/2019 2/1/2019 // correct'
  - '1/1/2019 1/1/2019'
---

Consider the following code block which calls the Date constructor with 2 type of values. In a US environment, what will be the output of `console.log`?

```javascript
let a = new Date("2019,1,1").toLocaleDateString();
let b = new Date(2019,1,1).toLocaleDateString();
console.log(a, b);
```

<!-- explanation -->

The Date constructor, `new Date()`, creates a date object at a given date or the current date if no date is given. It can be called in many ways. If the Date constructor is passed as a string, JavaScript will attempt to interpret the string as a date. in this case, "2019,1,1" is interpreted as January 1, 2019. If the Date constructor is passed three numbers, the first value will be interpreted as the year, the second value the month, and the third the day. The catch here is JavaScript starts its month indexing at 0, so month `1` is February!
