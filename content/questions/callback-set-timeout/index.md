---
title: Callback setTimeOut
tags:
  - callback function
  - time intervals
order: 55
date: Sun Oct 20 2019 12:08:06 GMT-0700 (Pacific Daylight Time)
answers:
  - 'A'
  - 'B // correct'
  - 'C'
  - 'D'
  - 'None of the above'
---

Which of the following functions will add two variables and pass the sum to a callback function after 2 seconds?

```javascript
// A
const add = (x, y, callback) => {
  setTimeout(() => {
    callback(x + y);
  }, 2);
};

// B
const add = (x, y, callback) => {
  setTimeout(() => {
    callback(x + y);
  }, 2000);
};

// C
const add = (x, y, callback) => {
  setTimeout(() => {
    callback(x + y, 2);
  });
};

// D
const add = (x, y, callback) => {
  setTimeout(() => {
    callback(x + y, 2000);
  });
};
```

<!-- explanation -->
The `setTimeout` function generally takes two variables: the first variable is the function to be executed, and the second variable is the interval, in milliseconds, after which the function gets executed.
