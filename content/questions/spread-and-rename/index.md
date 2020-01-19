---
title: Spread and Rename
tags:
  - spread
  - array
  - object
order: 10
date: '2019-09-27'
answers:
  - '[{ firstName: "James" }]'
  - '[{ firstName: "Jonah" }] // correct'
  - 'Something else'
---

Consider the following array with a single object. What happens when we spread that array and change the `firstName` property on the 0-index object?

```javascript
const arr1 = [{ firstName: 'James' }];
const arr2 = [...arr1];
arr2[0].firstName = 'Jonah';

console.log(arr1);
```

<!-- explanation -->

Spread creates a shallow copy of the array, meaning the object contained in `arr2` is still pointing to the same object in memory that the `arr1` object is pointing to. So, changing the `firstName` property of the object in one array will be reflected by the object in the other array changing as well.
