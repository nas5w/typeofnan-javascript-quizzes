---
title: Object Cloning (JSON.parse + JSON.stringify)
tags:
  - object
  - cloning
  - mutation
order: 27
date: '2019-10-05'
answers:
  - 'Joe Nested // correct'
  - 'Bob Changed'
  - 'Joe Changed'
  - 'Bob Nested'
---

Consider objects `a` and `b` below. What gets logged?

```javascript
const a = { 
  stringField: 'Joe',
  nestedField: {field: 'Nested'}
};
const b = JSON.parse(JSON.stringify(a));
b.stringField = 'Bob';
b.nestedField.field = 'Changed';
console.log(
  a.stringField,
  a.nestedField.field
);
```

<!-- explanation -->

`b = JSON.parse(JSON.stringify(a))` will perform a deep copy of object `a` and assign it to `b`. `b` will not contain any references to `a` and thus mutating any fields in `b` will not affect any fields in `a`. This will, however, only properly copy valid JSON values. See [MDN Description](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description) for a more detailed explanation.
