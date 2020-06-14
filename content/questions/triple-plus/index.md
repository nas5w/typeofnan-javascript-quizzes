---
title: Triple Plus
tags:
  - type coercion
  - operation precedence
order: 58
date: Wed Oct 23 2019 21:29:27 GMT-0700 (Pacific Daylight Time)
answers:
  - '44 4' 
  - '8 5'
  - '7 5 // correct' 
  - '43 5'
  - 'Syntax Error'
---

Consider the following code block. What is the result?

```javascript
let b = "4";

console.log(b +++ 3, b);
```

<!-- explanation -->

The Postfix Increment operator (`++`) takes precedence over the addition operator (`+`), and will coerce strings to numbers. The expression with the operator will evaluate to the coerced value, and (in line with the "Post" part of "Postfix") will increment the variable immediately afterwards.

The code block in the question is equivalent to

```javascript
let b = "4";
console.log((b++) + 3, b);
```

First, `b` is coerced to a number, and the increment expression evaluates to that number:

```javascript
console.log((4) + 3, b);
```

`b` is then incremented from `4` to `5`. This resolves to:

```javascript
console.log(7, 5);
```

See <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence">MDN</a>'s article on operator precedence.
