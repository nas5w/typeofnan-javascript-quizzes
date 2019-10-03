---
title: Event Scheduling
tags:
  - events
  - setTimeout
  - setInterval
order: 26
date: '2019-10-03'
answers:
  - '1, 2, 3, 4'
  - '4, 2, 1, 3'
  - '1, 4, 3, 2 // correct'
  - '4, 3, 2, 1'
---

In what order will the numbers 1-4 be logged to the console when the code below is executed?

```javascript
(function() {
  console.log(1);
  setTimeout(function() {
    console.log(2);
  }, 1000);
  setTimeout(function() {
    console.log(3);
  }, 0);
  console.log(4);
})();
```

<!-- explanation -->

`1` and `4` are displayed first since they are logged by simple calls to `console.log()` without any delay.
`2` is displayed after `3` because `2` is being logged after a delay of 1000 msecs (i.e., 1 second) whereas `3` is being logged after a delay of 0 msecs. Note that, despite `3` having a delay of 0 msecs, its code will only be executed after the current call stack is cleared. If this concept is new to you, consider checking out the [JS concurrency model/event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop).
