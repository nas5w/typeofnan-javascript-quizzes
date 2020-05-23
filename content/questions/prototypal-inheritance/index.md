---
title: Prototypal Inheritance
tags:
  - prototype
order: 4
date: '2019-09-27'
answers:
  - 'woof // correct'
  - 'arf'
---

In this question, we have a `Dog` constructor function. Our dog obviously knows the speak command. What gets logged in the following example when we ask Pogo to speak?

```javascript
function Dog(name) {
  this.name = name;
  this.speak = function() {
    return 'woof';
  };
}

const dog = new Dog('Pogo');

Dog.prototype.speak = function() {
  return 'arf';
};

console.log(dog.speak());
```

<!-- explanation -->

Every time we create a new `Dog` instance, we set the `speak` property of that instance to be a function returning the string `woof`. Since this is being set every time we create a new `Dog` instance, the interpreter never has to look farther up the prototype chain to find a `speak` property. As a result, the `speak` method on `Dog.prototype.speak` never gets used.
