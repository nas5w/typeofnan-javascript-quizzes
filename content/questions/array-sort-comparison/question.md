---
title: Array Sort Comparison
tags: arrays, sort, comparison
order: 1
---

# Question

What gets logged?

```javascript
const arr1 = ['a', 'b', 'c'];
const arr2 = ['b', 'c', 'a'];

console.log(
  arr1.sort() === arr1,
  arr2.sort() == arr2,
  arr1.sort() === arr2.sort()
);
```

# Incorrect Answers

- true true true
- true false true
- false false false

# Correct Answer

- true true false

# Explanation

This is some explanation
