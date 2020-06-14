---
title: The Walking Dead 
tags:
  - objects
  - delete keywords
  - Type systems
order: 35
date: '2019-10-06'
answers:
  - '1'
  - 'An error is thrown'
  - 'undefined // correct'
  - 'Something different is logged'
---

What is the output of the following `console.log`?

```javascript
const a = { something: 1, someOtherThing: 2 };

const deleteSomething = input => {
  delete input.something;
  return input.something;
};

const result = deleteSomething(a);

console.log(result);
```

<!-- explanation -->

The output will be `undefined` because the `delete` operator has already deleted the property `something` before we attempted to return it. When we try to access a non-existent object property, it will always return the value `undefined`. 
