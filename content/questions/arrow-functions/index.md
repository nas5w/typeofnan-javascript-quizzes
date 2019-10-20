---
title: Arrow Functions
tags:
  - arrow functions
  - functions
  - binding
order: 39
date: Mon Oct 07 2019 16:26:43 GMT+0530 (India Standard Time)
answers: 
  - 'Border Collie, Wooh'
  - 'Border Collie, undefined'
  - 'undefined, Wooh // correct'
  - 'undefined, undefined'
---
What is returned from the following `console.log`s?

```javascript
let dog = {
    breed: "Border Collie",
    Sound: "Wooh",
    getBreed : () => { 
        return this.breed;
    },
    getSound: function() {
        return this.Sound;
    }
};
console.log(dog.getBreed());
console.log(dog.getSound());
```

<!-- explanation -->

Arrow functions do not bind their own this, instead, they inherit the one from the parent scope, which is called "lexical scoping". That is the reason that the this in getBreed refers to the global object.

