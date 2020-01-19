---
title: Deleting Properties from an Object
tags:
  - object
order: 33
date: '2019-10-05'
answers:
  - 'A'
  - 'B // correct'
  - 'C'
  - 'D'
---

Which of the following is a valid way to delete the property `color` from the `car` object?

```javascript
const car = {
  make: 'Mercedez Benz',
  year: '2019',
  color: 'black'
};

// A
car.delete('color');

// B
delete car.color;

// C
delete car[color];

// D
car.color.delete();
```

<!-- explanation -->

You can use the JavaScript [delete operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) to remove a property from an object.

Both option A and D will give a TypeError, because neither `car.delete` nor `car.color.delete` is a function.

Option C will give a ReferenceError becuase `color` is not defined. However, `delete car['color']` will work - notice the quotation marks around `color`.
