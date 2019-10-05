---
title: Greatest Number in an Array
tags:
  - function
  - array
  - loop
order: 22
date: '2019-10-01'
answers:
  - 'Yes'
  - 'No // correct'
---

Will the following function always return the greatest number in an array?

```javascript
function greatestNumberInArray(arr) {
  let greatest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (greatest < arr[i]) {
      greatest = arr[i];
    }
  }
  return greatest;
}
```

<!-- explanation -->

This function will work fine for arrays where at least one value is `0` or greater; however, it will fail if all numbers are below `0`. This is because the `greatest` variable starts at `0` even if `0` is greater than all array elements.
