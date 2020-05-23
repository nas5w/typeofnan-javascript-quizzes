---
title: Operator Associativity
tags:
  - operator
  - associativity
  - precedence
order: 46
date: '2019-10-09'
answers: 
  - true and true
  - true and false // correct
  - false and false
  - undefined and undefined
  - SyntaxError
---

Given the following lines, what will be the output?

```javascript
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
```

<!-- explanation -->

The operators `<` and `>` follow left-to-right <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Associativity">associativity</a>, meaning that they will be interpreted starting from the left. For demonstration, left-to-right evaluated expressions like `a OP b OP c` can be written as `(a OP b) OP c`.

Following this scheme, the first expression becomes `(1 < 2) < 3`. The part in parenthesis evaluates to `true` leaving `true < 3`. Because the right-hand side is a number, the `true` on the left-hand side is coerced into the number `1`. Hence, the whole expression evaluates to `true`.

In the second example (visualized as `(3 > 2) > 1`), the first part `(3 > 2)` evaluates to `true`. The remaining portion `true > 1` then gets converted to `1 > 1`. As `1` is not greater than itself, the whole expression evaluates to `false`.
