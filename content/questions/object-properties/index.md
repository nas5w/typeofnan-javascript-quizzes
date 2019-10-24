---
title: Check if property exists in objects
tags:
  - object
  - property
  - in operator
  - hasOwnProperty
order: 58
date: Wed Oct 23 2019 20:34:09 GMT-0600 (Mountain Daylight Time)
answers:
  - 'false, false, false, false, false, false, d, c, b, a'
  - 'false, true,  false, false, false, false, d, c, b, a'
  - 'true,  true,  false, false, false, true,  d, c, a'
  - 'true,  true,  true,  true,  false, true,  d, c, a // correct'
---

What would be the output of all the `console.log` in the following code:

```javascript
  const obj1 = {
    a: 1,
  };

  // create 'obj2' with 'obj1' as its prototype, and set property 'b' to 2 and makes it non-enumerable
  const obj2 = Object.create(obj1, {
    b: {
      value: 2,
      enumerable: false
    }
  });

  obj2.c = 3;

  const obj3 = Object.create(obj2);

  obj3.d = undefined;

  console.log('b' in obj2);
  console.log(obj2.hasOwnProperty('b'));
  console.log('b' in obj3);
  console.log('d' in obj3);
  console.log('e' in obj3);
  console.log('constructor' in obj3);

  for (let prop in obj3) {
    console.log(prop);
  }
```

<!-- explanation -->

`Object.create(prototype)` creates and returns a new object, and makes the provided object the `prototype` of the newly created obect. Read more about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create).

There are many ways to find out if a property exists in an object.

One of the ways is the `in` operator. However, the problem with `in` operator is that it checks all properties in the prototype chain, even if they are non-enumerable. That is why it returns `true` for `console.log('b' in obj3)`, and also returns `true` for `console.log('constructor' in obj3)`. Furthermore, it also returns `true` for even those properties that have been explicitly set to `undefined` (like the property `d` above). Read more about the `in` operator [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in).

To check only those properties that are found in an object (and not on its prototype chain), we use the method `Object.prototype.hasOwnProperty(propertyName)`. [Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty).

Like the `in` operator, the `for..in` loop also traverses the prototype chain, however it does not count the non-enumerable properties. [Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in).

To loop through an objects own properties (even non-enumerable ones), use `Object.getOwnPropertyNames()`. [Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames).

For non-enumerable properties, and usually in general, the best approach is to use: `Object.keys()` to get a list of all keys of an object, `Object.values()` to loop through the values only, or `Object.entries()` to loop through all the `[key, value]` pairs of the object's enumerable properties.

[Object.keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
[Object.values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
[Object.entries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
