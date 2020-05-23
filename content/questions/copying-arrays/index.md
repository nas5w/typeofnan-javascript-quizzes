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
  - 'A, B, and C'
---

Which of the following methods are valid ways to copy `mainArray` ?

```javascript
const mainArray = ['one', 'two', 'three', 'five', 'four'];

// A
const a = mainArray;

// B
const b = [ ...mainArray ];

// C
const c = [];
mainArray.forEach(item => {
  c.push(item);
});
```

<!-- explanation -->

Option A just creates a new reference to the same array. In order to copy all the values from an array, you'll need to iterate through the array and copy each value over, which is what options B and C are doing.

Keep in mind that methods B and C are making **shallow copies**. This works in the example because all the values are strings. If `mainArray` had objects nested within it, the objects wouldn't be cloned; rather, both the original array and the cloned array would be holding a reference to the same object, so a change to the object in one array would result in a change to the object in the other array.

Remember, JavaScript passes by reference, not value. If you'd like to learn more about arrays and how to create shallow copies (like this example shows), check out the [MDN Array Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
