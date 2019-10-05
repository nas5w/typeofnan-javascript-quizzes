---
title: Copying Arrays
tags:
  - fetch
  - spread
order: 32
date: '2019-10-05'
answers:
  - 'A'
  - 'B'
  - 'C'
  - 'A and B'
  - 'B and C // correct'
---

How do I make a copy of an array?

```javascript
const mainArray = ['one', 'two', 'three', 'five', 'four'];

// A
const a = mainArray;

// B
const b = [ ...mainArray ];

// C
const c = [];
mainArray.forEach( item => {
  c.push(item);
});
```

<!-- explanation -->

Option A just makes a reference to the array. In order to copy all the values from an array, you'll need to iterate through the array and copy each value over, which is what options B and C are doing.

Remember, Javascript passes by reference, not value. If you'd like to learn more about Arrays and how to create shallow copies (like this example shows), check out the [MDN Array Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
