---
title: Promise.all Resolve Order
tags:
  - Promise
  - Promise.all
order: 7
date: '2019-09-27'
answers:
  - '["first", "second"] // correct'
  - 'It is random'
---

In this question, we have a `timer` function that returns a `Promise` that resolves after a random amount of time. We use `Promise.all` to resolve an array of `timers`. What gets logged?

```javascript
const timer = a => {
  return new Promise(res =>
    setTimeout(() => {
      res(a);
    }, Math.random() * 100)
  );
};

const all = Promise.all([
  timer('first'),
  timer('second')
]).then(data => console.log(data));
```

<!-- explanation -->

The order in which the Promises resolve does not matter to `Promise.all`. We can reliably count on them to be returned in the same order in which they were provided in the array argument.
