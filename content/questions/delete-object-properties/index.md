---
title: Deleting properties from an object
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

How do you delete property `color` from the `car` object?

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

Use the JavaScript [delete operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) to remove a property from an object.

Both option A and D will give TypeError, because neither `car.delete` nor `car.color.delete` is a function.

Option C will give Reference error becuase `color` is not defined. However, `delete car['color']` will work, notice the quotation mark around `color`.
