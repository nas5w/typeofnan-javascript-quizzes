---
title: Async/Await
tags:
  - es6
  - promise
order: 39
date: Mon Oct 07 2019 09:40:20 GMT-0700 (Mountain Standard Time)
answers:
  - 'first!'
  - 'done! // correct'
  - 'JavaScript error'
  - 'Something else'
---

Consider the following async function and its output. What will be displayed to the console when calling the `f()` function?

```javascript
async function f() {
  let result = 'first!';
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  });

  result = await promise;

  console.log(result);
}

f();
```

<!-- explanation -->

The function execution "pauses" at the line `await promise` and resumes when the promise settles, with the resolve value of the promise being assigned to `result`. So, the code above shows "done!" after one second.

Let’s emphasize: `await` makes the current function pause until the promise settles, and then goes on with the result. This doesn’t cost any CPU resources, because the engine can do other jobs
in the meantime: execute other scripts, handle events etc.

`await` is mostly just a more elegant way to get the promise result than `promise.then`. `await` is easier to read and write, especially when multiple Promises need to be waited for, which would otherwise require somewhat-unwieldy `.then` chains.
