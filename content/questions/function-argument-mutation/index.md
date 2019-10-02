---
title: Function Argument Mutation
tags:
  - functions
  - mutability
order: 23
date: '2019-10-01'
answers:
  - 'true // correct'
  - 'undefined'
---

When passing an object as an argument to a function, can the orginal object be mutated? In the following example, will `somePerson.valid` be `true` or `undefined`?

```javascript
const somePerson = { username: 'Davey154' };

const personValidator = person => {
  person.valid = person.username.length > 5;
  return person.valid;
};

personValidator(somePerson);

console.log(somePerson.valid); // ??
```

<!-- explanation -->

In our function, `person` will point to the same object in memory that `somePerson` points to. This means any mutation we do to `person` within our function also happens to `somePerson`!
