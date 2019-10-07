---
title: Numeric Literals
tags:
  - parseInt
  - number
  - decimal
  - hexadecimal
  - binary
  - octal
order: 41
date: '2019-10-07'
answers:
  - '141'
  - '42 // correct'
  - '66'
  - 'ReferenceError: xA is not defined'
  - 'SyntaxError: identifier starts immediately after numeric literal'
  - "TypeError: can't convert BigInt to number"
---

What gets logged?

```javascript
console.log(0xA + 0b11 + 0o20 - 010 + 12e0 + 9)
```

<!-- explanation -->

While you're likely most accustomed to writing numbers in base 10 - decimal notation - JavaScript provides many ways of writing
numeric literals in different bases and in different ways. Most use prefixes.

In the case above, we have:

A hexadecimal `A`, prefixed by `0x` yielding decimal `11`;

A binary `11`, prefixed by `0b` yielding decimal `3`;

An octal `20`, prefixed by `0o` yielding decimal `16` and _another_ octal `10`, (snaeakily prefixed with just `0`) yielding decimal `8`;

An inline scientific notation with `e`, which is shorthand for 12 x 10<sup>1</sup> (alternatively `12 * Math.pow(10, 1)`), yielding decimal `12`. Note: exponentiation works with any base (e.g., `0xAe2` == `2786`);

And a plain decimal `9`.

As a note to the reader, the last numeric literal, [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) can be represented by post-fixing a number with `n`, such as `2n`. This allows manipulating numbers larger than [`Number.MAX_SAFE_INTEGER`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER).
