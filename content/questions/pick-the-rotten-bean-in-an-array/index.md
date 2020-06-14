---
title: Pick the Rotten Bean in an Array
tags:
  - array
order: 54
date: '2019-10-20'
answers: 
  - 'A // correct'
  - 'B'
  - 'Both of them'
---

There is a rotten bean which looks different inside a basket. Which option below is the right way to create a new array containing only the rotten bean?

```javascript
var basket = [0, 0, 0, 0, 9];

// A 
basket.splice(4, 1);

// B
basket.slice(4, 1);
```

<!-- explanation -->

Option B in this case is not the right choice: the optional second parameter of the `slice` method must be the end index of the portion of the array you want to slice. (It's not the number of elements you want to delete.)
