---
title: For Loop
tags:
  - function
  - array
  - loop
order: 15
date: '2019-10-01'
answers:
  - '100'
  - '0'
  - '99'
---

What is the result of this for loop when passed 'array'?

```javascript
const array = [-1,0,3,100,99,2,99]

function biggestNumberInArray(arr) {
  let highest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (highest < arr[i]) {
      highest = arr[i];
    }
  }
  return highest
}
```

<!-- explanation -->

Function which runs a loop on the array, compares the element vs the highest number currently selected and replaces if the number is higher. 