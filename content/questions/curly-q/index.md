---
title: Curly Q
tags:
  - functions
  - brackets
order: 39
date: '2019-10-06'
answers:
  - '{ foo: "foo" } undefined // correct'
  - 'undefined { bar: "bar" }'
  - 'undefined undefined'
---

What will the `foo()` and `bar()` functions return when logged to the console together?

```javascript
const foo = () => {
  return {
    foo: "foo"
  };
}

const bar = () => {
  return
  {
    bar: "bar"
  }
}

console.log(foo(), bar())
```

<!-- explanation -->

Although the `foo()` and `bar()` functions above look almost identical, `bar()` returns
`undefined`. This is because JavaScript automatically inserts semicolons after
certain statements when they are followed by a newline, including `return` statements.

Let's look at both functions and see where JavaScript inserts semicolons:

```javascript
const foo = () => {
  return {
    foo: "foo"
  };
}
```

Hmm...the return statement is followed immediately by a curly brace on the same
line, so JavaScript only adds semicolons after the closing curly braces in `foo()`, like
so:

```javascript
const foo = () => {
  return {
    foo: "foo"
  };
};
```

However, `bar()` is a little different.

```javascript
const bar = () => {
  return;
  {
    bar: "bar"
  }
};
```

Note how the curly brace after `return` occurs on the following line. When
`bar()` is run, JavaScript
automatically places a semicolon after `return`, like so:

```javascript
const bar = () => {
  return;
  {
    bar: "bar"
  }
};
```

It's essentially the same as running this function:

```javascript
const bar = () => {
  return;
};
```

`bar` thus returns `undefined` because (according to JavaScript) it contains no
inner values when run. This is a good reason to be careful about where you place
brackets!

(For a quick overview on
JavaScript's automatic semicolon insertion, <a
href="https://flaviocopes.com/javascript-automatic-semicolon-insertion/">check
out this article</a> by Flavio Copes.)
