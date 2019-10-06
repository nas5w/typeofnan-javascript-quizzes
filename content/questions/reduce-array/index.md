---
title: Reduce Array
tags:
  - reduce
  - array
order: 39
date: '2019-09-22'
answers:
  - 'hello // correct'
  - 'eohll'
  - 'Order not guaranteed'
---

What gets logged?

```javascript
const scrambled = { 2: "e", 5: "o", 1: "h", 4: "l", 3: "l" };

const result = Object
  .values(scrambled)
  .reduce((agg, el) => agg + el, "");

console.log(result);
```

<!-- explanation -->

The reduce array method takes two arguments: a reducer function and an initial value. 
In this case, our reducer function is (agg, el) => agg + el and our initial value is "". 
In the reducer function, agg is the aggregator (which starts at the initial value) and el is each element In this case, as we iterate through the array, we add the current el to the aggregated value. 
If our array was ['a', 'b', 'c'], then the reduce would be 'a' the first time around, 'ab' the second time, and finally would return 'abc'.