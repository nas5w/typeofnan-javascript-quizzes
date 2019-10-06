---
title: The walking dead 
tags:
  - objects
  - delete keywords
  - Type systems
order: 34
date: '2019-10-06'
answers:
  - '1'
  - 'Error Thrown'
  - 'undefined // correct'
  - 'Neither'
---

What is the return of the following console.log?

```javascript
const a = {something: 1, someOtherThing: 2};

const deleteSomething = input => {
	delete input.something;
	return input.something;
};

const result = deleteSomething(a);

console.log(result);
```


<!-- explanation -->

The output will be `undefined` due to the `delete` operator has already deleted the property `something`, before it was returned. When you print an `object` without a predefined `property` it will always return the value `undefined`. 
