---
title: Array Sort Comparison
tags:
  - arrays
  - sort
  - comparison
order: 1
date: '2019-09-27'
answers:
  - true true true
  - true true false // correct
  - false false false
  - true false true
---

Consider the following arrays. What gets logged in various sorting conditions?

```javascript
const arr1 = ['a', 'b', 'c'];
const arr2 = ['b', 'c', 'a'];

console.log(
  arr1.sort() === arr1,
  arr2.sort() == arr2,
  arr1.sort() === arr2.sort()
);
```

<!-- explanation -->

There are a couple concepts at play here. First, the array `sort` method sorts your original array and also returns a reference to that array. This means that when you write `arr2.sort()`, the `arr2` array object is sorted.

It turns out, however, the sort order of the array doesn't matter when you're comparing objects. Since `arr1.sort()` and `arr1` point to the same object in memory, the first equality test returns `true`. This holds true for the second comparison as well: `arr2.sort()` and `arr2` point to the same object in memory.

In the third test, the sort order of `arr1.sort()` and `arr2.sort()` are the same; however, they still point to different objects in memory. Therefore, the third test evaluates to `false`.
