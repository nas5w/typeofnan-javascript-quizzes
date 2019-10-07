---
title: Semicolon in JS
tags:
  - semicolon
  - return
order: 10
date: '2019-10-07'
answers:
  - 'Yes // correct'
  - 'No'
---

Consider the two functions below. Will they both return the same thing?

```javascript
function foo1() {
  return {
    bar: 'hello'
  };
}

function foo2() {
  return;
  {
    bar: 'hello';
  }
}
```

<!-- explanation -->

foo1 returns: `Object {bar: "hello"}` and foo2 returns: `undefined` .

The reason for this has to do with the fact that semicolons are technically optional in JavaScript. As a result, when the line containing the `return` statement (with nothing else on the line) is encountered in `foo2()`, a semicolon is automatically inserted immediately after the return statement.

No error is thrown since the remainder of the code is perfectly valid, even though it doesn’t ever get invoked or do anything (it is simply an unused code block that defines a property `bar` which is equal to the string `"hello"`).
