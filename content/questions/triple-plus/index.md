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

---

Consider the following code block. What gets logged?

```javascript
let b = "4";

console.log(b +++ 3, b);
```

<!-- explanation -->

The Postfix Increment operator (`++`) takes precedence over the addition operator (`+`). The Postfix Increment operator also coerces strings to numbers. It uses the coerced number in the current expression, and the incremented value is not available until the following expression. So `"4"` is converted to `4`, then `3` is added. Then `4` is incremented to `5`, which is visible when `b` is passed as the second argument to `console.log`

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
