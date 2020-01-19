---
title: Lexical Scope
tags:
  - scope
order: 52
date: '2019-10-20'
answers: 
  - 2 // correct
  - '3'
  - 'Undefined'
---

Fun Lexical Scope! What do you think will be printed?

```javascript
function printSomething() {
	console.log( something );
}

function invokePrintSomething() {
	var something = 3;
	printSomething();
}

var something = 2;

invokePrintSomething();
```

<!-- explanation -->

When a variable is referenced in JavaScript, the interpreter will try to find which binding it references by looking through the ancestor blocks and functions to see if a variable with that name is declared in that block or function. The nearest ancestor block (or the top level) which defines the variable with `const`, `let`, or `var` will be identified as the binding to use.

Here, when `invokePrintSomething` is called and the `var something = 3` is found, the interpreter will see that the `something` is initialized with `var` in the same block, so the binding is to a variable local to `invokePrintSomething`. Then, when `printSomething` is called, and it comes across `console.log( something );`, it will look to its ancestor blocks to see where a variable named `something` is defined. The nearest (and only) ancestor block is the top level, with a `var something` which currently holds the value of `2`, so `2` gets logged.
