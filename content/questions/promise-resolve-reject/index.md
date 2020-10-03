---
title: Promise Resolve & Reject
tags:
  - Promise
  - Promise Resolve
  - Promise Reject
order: 76
date: '2020-10-03'
answers:
  - 'error, success, Error in catch block // correct'
  - 'success, success'
  - 'success, error, success, error'
  - 'success, error, Error in catch block'
  - 'success, error, error'
---

In this question, we have a `example` function that returns a `Promise` that resolves or rejects according to the value passed to it. We use `Promise.then` to resolve the promise so it gets passed to the next block. What gets logged?

```javascript
function example(value) {
  return new Promise(function (resolve, reject) {
    if (value) {
      resolve('success');
    } else {
      reject('error');
    }
  });
}

let promise = example(true);

promise

  .then(function (data) {
    console.log(data);
    return example(false);
  })

  .catch(function (error) {
    console.log(error);
    return 'Error in catch block';
  })

  .then(function (data) {
    console.log(data);
    return example(true);
  })

  .catch(function (error) {
    console.log(error);
  });
```

<!-- explanation -->

The first value passed to the promise is true. It enters the if condition and resolves with the value 'success'. It then goes to the first `then` block and logs the value 'success'. The `example` function is called again with value false. It now enters the else block and the promise is rejected with the value 'error'. It enters the second catch block and logs the value 'error'. This block further returns 'Error in catch block' which moves to the next `then` block and logs 'Error in catch block'. The example function is not called with value true. It enters the if block and is resolved. The code ends and nothing else gets logged.
