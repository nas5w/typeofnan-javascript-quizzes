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

What is logged by the following snippet?

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

The output will be `undefined` because the `delete` operator has already deleted the property `something` before we attempt to return it. When try to access a non-existent object property, it will always return the value `undefined`. 
