---
title: Promise vs Callback
tags:
  - promise
  - callback
order: 59
date: Tue Oct 22 2019 20:35:32 GMT-0600 (Mountain Daylight Time)
answers:
  - 'cb2 -> p1  -> cb1 -> p2'
  - 'p1  -> cb2 -> p2  -> cb1 // correct'
  - 'cb2 -> p1  -> p2  -> cb1'
  - 'p1  -> cb2 -> cb1 -> p2'
---

What would be the sequence of the `console.log` in the following code:

```javascript
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1');
  }, 0);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2');
  }, 1000);
});

setTimeout(() => console.log('cb1'), 1000);
setTimeout(() => console.log('cb2'), 0)
p1.then(console.log);
p2.then(v => console.log(v));
```

<!-- explanation -->

Promises have a higher priority than callbacks. This is because callbacks are stored for execution on **Message queue**, while promises are stored on the **Job queue / Micro-task queue** (introduced in ES6). If the call stack is not empty, all code in the call stack is executed first before any code in the Message queue or Job queue is touched, this is called **Starving the Event Loop**. The difference between the Message queue and the Job queue is that the job queue has a higher priority than the message queue. Thus, if the call stack is empty, the event loop looks into the job queue first to see if there’s any pending callback waiting to be executed and if there is, it is executed. If the job queue is empty, callbacks on the message queue are executed. This means that promise jobs inside the job queue/ micro-task queue will be executed before the callbacks inside the message queue, if they happen to occur simultaneously.

Hence in the code above, even though `p1` and `cb2` have a `setTimeout` of `0ms`, `p1` is printed first because it is a promise, then comes `cb2`, followed by `p2` and then finally `cb1`.