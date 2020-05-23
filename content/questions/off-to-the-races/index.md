---
title: Off to the Races
tags:
  - promise
  - race-condition
  - iterable
order: 40
date: '2019-10-06'
answers:
  - 'Hello'
  - 'Goodbye'
  - 'Oops!'
  - 'Something went wrong... // correct'
  - 'TypeError: Promise.race is not a function'
---

What gets logged?

```javascript
const p1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, 'Hello'));

const p2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 120, 'Goodbye'));

const p3 = new Promise((resolve, reject) =>
  setTimeout(reject, 10, 'Oops!'));

Promise.race([p1, p2, p3])
  .then((result) => console.log(result))
  .catch((reason) => console.log("Something went wrong..."));
```

<!-- explanation -->

Given an iterable of Promises, [`Promise.race()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race) returns a Promise that resolves or rejects with the value of the first
Promise that settles (the first Promise that resolves or rejects).

In this case, `p3` settles first, rejecting after 10 ms and falling into the `catch()` handler.
