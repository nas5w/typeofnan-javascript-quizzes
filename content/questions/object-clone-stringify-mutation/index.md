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
b.stringField = 'Bob'
b.nestedField.field = 'Changed'
console.log(a.stringField,
a.nestedField.field
);
```

<!-- explanation -->

Setting `b = JSON.parse(JSON.stringify(a))` will perform a deep copy of object `a`. `b` will not contain any references to `a` and thus mutating any fields in `b` will not affect any fields in `a`.