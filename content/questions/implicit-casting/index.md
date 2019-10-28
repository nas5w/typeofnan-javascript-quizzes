---
title: Object stringification
tags:
  - objects
  - strings
  - casting
order: 72
date: '2019-10-28'
answers:
  - '{}3'
  - '[object Object]3 // correct'
  - '3'
  - 'TypeError'
---

`a` and `b` are constants. What will the console output be?

```javascript
const a = {};
const b = 3;

console.log(a+b);
```

<!-- explanation -->

When trying to add two completely different types together (for example a `number` and an `object`) a funtion in the prototype chain named `toString` is called on the each operand. The two strings returned by these functions then get concatenated.

The function `toString` can be overriden though: The following example will return `Hello World` instead:
```javascript
const a = {
    toString: function() {
        return "Hello";
    }
};
const b = {
    toString: function() {
        return "World";
    }
};

console.log(a + " " + b);
```
