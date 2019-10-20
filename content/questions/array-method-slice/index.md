---
title: Array Method
tags:
  - Array methods
  - slice
order: 51
date: Sun Oct 20 2019 13:01:02 GMT-0700 (Pacific Daylight Time)
answers: 
  - '['Banana', 'Lemon']'
  - '['Lemon', 'Apple']'
  - '['Orange', 'Lemon']'
---
Given an array of fruits, after slice method is apllied, what will the result be?

---
```javascript
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);
```

<!-- explanation -->
The reason why the result will be Orange and Lemon is that array index always starts at zero and the end index is "exclusive", meaning the returned array doesn't include that index. 

slice does not alter the original array. It returns a shallow copy of elements from the original array. Elements of the original array are copied into the returned array as follows:

For object references (and not the actual object), slice copies object references into the new array. Both the original and new array refer to the same object. If a referenced object changes, the changes are visible to both the new and original arrays.
For strings, numbers and booleans (not String, Number and Boolean objects), slice copies the values into the new array. Changes to the string, number or boolean in one array do not affect the other array.
If a new element is added to either array, the other array is not affected.
