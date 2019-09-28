---
title: Reduce Math
tags:
  - reduce
  - array
order: 8
date: '2019-09-27'
answers:
  - '1'
  - '60'
  - '100'
  - '120 // correct'
---

Math time! What gets logged?

```javascript
const arr = [
  x => x * 1,
  x => x * 2,
  x => x * 3,
  x => x * 4
];

console.log(arr.reduce((agg, el) => agg + el(agg), 1));
```

<!-- explanation -->

In the array `reduce` method, our initial value is given in the second argument. In this case, that's `1`. We can then iterate over our functions as follows:

1 + 1 \* 1 = 2<br />
2 + 2 \* 2 = 6<br />
6 + 6 \* 3 = 24<br />
24 + 24 \* 4 = 120

So, 120 it is!
