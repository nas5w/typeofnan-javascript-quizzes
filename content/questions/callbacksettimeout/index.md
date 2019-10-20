---
title: Callback setTimeOut
tags:
  - callback function
  - time intervals
order: 52
date: Sun Oct 20 2019 12:08:06 GMT-0700 (Pacific Daylight Time)
answers:
  - 'const add = (x, y, callback) => {
    setTimeout(() => {
    callback(x + y)
    }, 2000)'

  - 'const add = (x, y, callback) => {
    setTimeout((200) => {
    callback(x + y)
    }}'

  - 'const add = (x, y, callback) => {
    setTimeout(() => {
    callback(x + y, (2))
    }}'

  - 'None of the above!'
---

Where does time interval go and what is the time format? (Ex. milliseconds, seconds, minutes)

```javascript
const add = (x, y, callback) => {
  setTimeout(() => {
    callback(x + y);
  });
};
```

<!-- explanation -->

The reason why setTimeOut requires us to format time in milliseconds is that the computer runs in milliseconds. That is why we have value at 2000 milliseconds is to set the time interval to run at two seconds.

The reason for the time interval being after the callback function is that the setTimeOut function has two variable conditions. You have the actual callback function that will run, and the interval to say how long after running the setTimeOUt function to display/run your callback function.
