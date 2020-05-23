---
title: Combining Different Types
tags:
  - types
order: 31
date: '2019-10-05'
answers:
  - '3 1'
  - '"21" 1 // correct'
  - '"21" ""'
  - 'An error is thrown'
---

What gets logged in the following scenario?

```javascript
console.log(2 + "1");
console.log(2 - "1");
```

<!-- explanation -->

The first expression evaluates to `"21"` because the `+` operator results in string concatenation when either operand is a string. On the other hand, the `-` operator cannot act on strings so `"1"` gets converted to a number in the evaluation of the second expression.
