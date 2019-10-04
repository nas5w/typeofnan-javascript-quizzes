---
title: Largest Number in an Array
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

Will the following function always return the largest number in an array?

```javascript
function largestNumberInArray(arr) {
  let highest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (highest < arr[i]) {
      highest = arr[i];
    }
  }
  return highest;
}
```

<!-- explanation -->

This function will work fine for arrays where at least one value is `0` or greater; however, it will fail if all numbers are below `0`. This is because the `highest` variable starts at `0` even if `0` is higher than all array elements.
