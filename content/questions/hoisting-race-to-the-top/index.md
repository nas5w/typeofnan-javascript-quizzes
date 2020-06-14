---
title: Hoisting
tags:
  - hoisting
order: 25
date: '2019-10-03'
answers:
  - 'second 1 3'
  - 'first 3 2 // correct'
  - 'second 3 3'
  - 'first 3 3'
---

Consider the following declarations and expression. What gets logged?

```javascript
immaBeOnTop();

var immaBeOnTop;

function immaBeOnTop() {
  console.log('first');
}

immaBeOnTop = function() {
  console.log('second');
};
```

What gets logged here?

```javascript
foo();

function foo() {
  console.log(1);
}

var foo = function() {
  console.log(2);
};

function foo() {
  console.log(3);
}

foo();
```

<!-- explanation -->

The answer is `first` for the first question. While both function declarations and variable declarations are hoisted, function declarations are hoisted first and then variables. Duplicate var declarations (but not asssignments!) are also ignored. So, what is interpreted by the engine is:

```javascript
function immaBeOnTop() {
  console.log('first');
}

immaBeOnTop(); //'first'

immaBeOnTop = function() {
  console.log('second');
};
```

The answer is `3 2` for the second question. While duplicate var declarations are ignored, subsequent function declarations and variable assignments do override previous ones. So what's happening with the code above is:

```javascript
function foo() {
  console.log(1);
}

function foo() {
  console.log(3);
}

foo(); //3

foo = function() {
  console.log(2);
};

foo(); //2
```

[Reference: You Don't Know JS Yet: Scope & Closures by Kyle Simpson](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch4.md)
