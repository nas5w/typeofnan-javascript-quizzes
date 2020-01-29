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

Every time we create a new `Dog` instance, we set the `speak` property of that instance to be a function returning the string `woof`. Then, we are adding another property also called `speak` to `Dog` prototype. When we call `dog.speak()`, we are always referring to the `speak` property in that instance. 

If there wasn't any property with the name `speak` in the `dog` object, JavaScript would try to find it up the prototype chain, which in this case would be the prototypal `speak` property on `Dog` which returns the `arf` string. However, since `speak` is already defined in `dog`, calling `dog.speak` will return this property, effectively shadowing `Dog.prototype.speak`.
