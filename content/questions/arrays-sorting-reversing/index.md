---
title: Arrays, Sorting, and Reversing
tags:
  - shorthand
  - array
order: 50
date: '2019-10-08'
answers: 
  - '[1, 3, 5, 7, 25]
[7, 5, 3, 25, 1]
[1, 25, 3, 5, 7]
[1, 25, 3, 5, 7]'
  - '[1, 25, 3, 5, 7]
[5,1,3,7,25]'
  - '[1, 25, 3, 5, 7]
[7, 5, 3, 25, 1]
[7, 5, 3, 25, 1]
[7, 5, 3, 25, 1] // correct'
  - 'An error is thrown'
---

Consider the following two arrays and operations on them. What gets logged as a result of script execution ?

```javascript
const ar = [5, 1, 3, 7, 25];
const ar1 = ar;
console.log(ar1.sort());
(
  [5, 25].indexOf(ar[1]) != -1 && 
  console.log(ar.reverse())
) || 
(
  ar[3] == 25 && console.log(ar)
);
console.log(ar1);
```

<!-- explanation -->

`const ar1 = ar` means that `ar1` points to the same array in memory as `ar`.  `ar1.sort()` works **in-place** and therefore modifies the original array `ar`.  **Both** variables `ar` and `ar1` point to the same sorted array.

Remember that the default [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) function converts elements to strings and then sorts alphabetically, so the first `console.log` outputs `[1, 25, 3, 5, 7]`.

Next, `ar[1]` is found in the array `[5, 25]`, resulting in `[5, 25].indexOf(ar[1]) != -1` evaluating to `true`, leading to the second part of the statement (`ar.reverse()`) being evaluated.  Because `ar.reverse()` also works **in-place** and modifies the original array, `ar` is now `[7, 5, 3, 25, 1]`, which is the output of the second `console.log`.

Because `console.log` returns `undefined`, the first part effectively now evaluates to the following:

```javascript
(
  undefined
) || (ar[3] == 25 && console.log(ar));
```

Because `undefined` is falsy, the second half of the statement is now evaluated.  `ar[3] == 25` is true because the fourth element of the array is `25`, so this statement evaluates to `true` and `ar` is outputted in the third `console.log` as `[7, 5, 3, 25, 1]`.

Finally, we know that `ar1` is still pointing to the same array in memory as `ar`, so the fourth log `console.log(ar1);` simply outputs the same array again (`[7, 5, 3, 25, 1]`).
