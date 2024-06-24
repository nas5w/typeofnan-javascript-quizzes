---
title: Function Expression vs. Function Declaration
tags:
  - functions
  - function types
  - function expressions
  - function declarations
  - function statements
order: 72
date: Mon Oct 28 2019 11:47:57 GMT-0500 (Central Daylight Time)
answers:
  - Function A is a function expression and Function B is a function declaration. Function expressions are confined to their local scope and not hoisted. Function declarations are hoisted to the top and globally defined.
  - Function A is a function expression and Function B is a function declaration. Function expressions are hoisted to the top and globally defined. Function declarations are confined to their local scope not hoisted.
  - Function A is a function declaration and Function B is a function expression. Function expressions are hoisted to the top and globally defined. Function declarations are confined to their local scope not hoisted. // correct
  - Function A is a function declaration and Function B is a function expression. Function expressions are confined to their local scope and not hoisted. Function declarations are hoisted to the top and globally defined.
---

Which of the expressions below is a function expression, and which is a function declaration? What is the difference between the two?

```javascript
//Function A
function foo() {
  return 'I am a function';
}

//Function B
var foo2 = function() {
  return 'I too am a function';
};
```

<!-- explanation -->

A function declaration defines a named function without having to assign it to a variable. These types of functions get hoisted to the top and are interpreted first within their JavaScript scope. Thus function declarations are globally accessible.

```javascript
//Function Declaration
function declarative() {
  return 'I am a declarative function';
}
```

On the other hand, function expressions (sometimes referred to as function statements) are contained within other expressions. Their scope is contained to the block of code they are written in. Function expressions are not hoisted to the top of their JavaScript document. They can be anonymous or named, though named is preferred for debugging purposes.

```javascript
//Anonymous Function Expression
var expression = function() {
  return 'I am an anonymous expressive function';
};

//Named Function Expression
var expression = function named() {
  return 'I am a named expressive function';
};
```

Function expressions are optimal for maintaining clean code uncluttered with global variables, though function declarations can be useful if a function is called before it is defined.
