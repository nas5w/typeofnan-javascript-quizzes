---
title: Async/Await
tags:
  - es6
  - javascript
  - promise
order: 39
date: Mon Oct 07 2019 09:40:20 GMT-0700 (Mountain Standard Time)
answers:
  - 'first!'
  - 'done! // correct'
  - 'JavaScript error'
  - 'Something else'
---

Consider the following async function and it's output, what will be displayed to the console when
calling the `f()` function?

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

The function execution "pauses" at the line `await promise` and resumes when the promise settles,
with result becoming its result. So the code above shows "done!" after one second.

Let’s emphasize: `await` literally makes JavaScript wait until the promise settles, and then go on
with the result. That doesn’t cost any CPU resources, because the engine can do other jobs
meanwhile: execute other scripts, handle events etc.

It’s just a more elegant syntax of getting the promise result than `promise.then`,
easier to read and write.
