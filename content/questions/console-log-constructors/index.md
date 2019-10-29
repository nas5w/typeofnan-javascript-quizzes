---
title: Console Log Constructors
tags:
  - array
  - object
order: 38
date: '2019-09-19'
answers:
  - 'object array number'
  - 'object object number'
  - 'object object object'
  - 'something else  // correct'
---

Consider the following code block. What gets logged?

```javascript
console.log(
  typeof Object, 
  typeof Array, 
  typeof Number
);
```

<!-- explanation -->

The correct answer is 'function function function' - Object, Array and Number are all constructors (functions).
