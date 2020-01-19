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

With `Array#reduce`, the initial value of the aggregator (here, named `agg`) is given in the second argument. In this case, that's `1`. We can then iterate over our functions as follows:

1 + 1 \* 1 = 2 (value of aggregator in next iteration)<br />
2 + 2 \* 2 = 6 (value of aggregator in next iteration)<br />
6 + 6 \* 3 = 24 (value of aggregator in next iteration)<br />
24 + 24 \* 4 = 120 (final value)

So, 120 it is!
