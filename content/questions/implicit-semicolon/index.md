---
title: Implicit semicolon insertion
tags:
  - semicolon
  - implicit
  - print
order: 58
date: Thu Oct 24 2019 16:09:25 GMT+0200 (Central European Summer Time)
answers: 
  - 'Giovanni'
  - 'Good morning, Giovanni'
  - 'Good morning,'
  - 'undefined // correct'
---

What does this snippet of code return?

```javascript
function Greetings(name) {
  return
    "Good morning, " + name
}

Greetings("Giovanni")
```

<!-- explanation -->

There are a number of keywords and syntax constructions which are not permitted to have newlines at a particular point. For example, `return`, `continue`, `break`, `throw`, and `yield`, if connected with another JavaScript token on the right-hand side, are forbidden to be separated from that token by a newline. For example, when `throw`ing something, the start of the thrown expression must be on the same line as the `throw`.

When the interpreter is parsing JavaScript text and comes across one of these situations where a newline is forbidden, but a newline is found, and the preceding token (`return`, `continue`, etc) does *not* end with a semicolon, a semicolon will be inserted. So, the interpreter parses the code above into:

```javascript
function Greetings(name) {
  return;
    "Good morning, " + name;
}

Greetings("Giovanni");
```

Nothing is returned, so the return value is `undefined`.

For more information about the rules for Automatic Semicolon Insertion, see [this question](https://stackoverflow.com/a/2846298).
