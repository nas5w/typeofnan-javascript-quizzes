---
title: Object Cloning (Object.assign) Comparison
tags:
  - object
  - cloning
  - mutation
order: 30
date: '2019-10-05'
answers:
  - 'Joe Nested aReturn'
  - 'Bob Changed bReturn'
  - 'Joe Changed aReturn // correct'
  - 'Bob Nested bReturn'
---

Consider objects `a` and `b` below. What gets logged?

```javascript
const a = { 
  stringField: 'Joe',
  nestedField: {field: 'Nested'},
  functionField: () => 'aReturn'
};
const b = Object.assign({}, a);
b.stringField = 'Bob';
b.nestedField.field = 'Changed';
b.functionField = () => 'bReturn';
console.log(
  a.stringField,
  a.nestedField.field,
  a.functionField()
);
```

<!-- explanation -->

`b = Object.assign({}, a);` will create a shallow copy of object `a` and assign it to `b`. Since `b` is a shallow copy, any values in `b` of the type "object", including Date objects, will be referring to the same object that exists in the original `a` - a change to one of those in either `a` or `b` will result in the other object being changed as well, because they're the same reference.

Note that, unlike using `JSON.parse` and `JSON.stringify` to deep clone an object, `Object.assign` will properly clone values on the top level of an object which can't be represented in JSON, such as functions and symbols. See [MDN Description](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Examples) for a more detailed explanation.
