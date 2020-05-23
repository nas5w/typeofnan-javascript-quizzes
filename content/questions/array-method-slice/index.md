---
title: Array Method
tags:
  - Array methods
  - slice
order: 55
date: Sun Oct 20 2019 13:01:02 GMT-0700 (Pacific Daylight Time)
answers: 
  - '["Banana", "Lemon"]'
  - '["Lemon", "Apple"]'
  - '["Orange", "Lemon"] // correct'
---

What will the value of `citrus` be in the below code?

```javascript
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);
```

<!-- explanation -->
The reason why the result will be `["Orange", "Lemon"]` is that the two parameters `.slice` accepts are:

* The start index, inclusive
* The end index, *exclusive* (the item at the end index will not be included in the result)

`.slice` does not alter the original array. It returns a shallow copy of elements from the original array. It's only a shallow copy, so if an object is *mutated* in one of the arrays after slicing, the same object in the other array will have changed too, because the objects both point to the same location in memory. In contrast, *reassigning* any value in one array, primitive or otherwise, will have no effect on the other array. Simiarly, adding or removing items from one array will not affect the other.
