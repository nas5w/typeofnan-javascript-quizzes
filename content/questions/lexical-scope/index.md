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

Lexical scope holds that the RHS(Right Hand Side) reference to something in printSomething() will be resolved to the global variable something, which will result in value 2 being output.
