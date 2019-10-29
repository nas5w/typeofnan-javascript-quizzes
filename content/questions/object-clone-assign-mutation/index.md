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
const b = Object.assign({},a);
b.stringField = 'Bob'
b.nestedField.field = 'Changed'
b.functionField = () => 'bReturn'
console.log(
  a.stringField,
  a.nestedField.field,
  a.functionField()
);
```

<!-- explanation -->

Setting `b = Object.assign({},a);` will perform a shallow copy of object `a`. Since `b` is a shallow copy, any fields in `b` of the type "object", including Date objects, will be a ref to the field in `a`. However, unlike using `JSON.parse` and `JSON.stringify` to clone an object, `Object.assign` will work with non valid JSON values such as Functions and Symbols. See [MDN Description](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Examples) for a more detailed explanation.
