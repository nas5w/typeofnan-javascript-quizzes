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

What gets logged in the following code?

```javascript
let dog = {
    breed: "Border Collie",
    sound: "Wooh",
    getBreed: () => { 
        return this.breed;
    },
    getSound: function() {
        return this.sound;
    }
};
console.log(dog.getBreed(), dog.getSound());
```

<!-- explanation -->

The `this` inside an arrow function does not depend on how the function was called. Instead, they inherit the `this` of the parent scope. This is called "lexical scoping". In sloppy mode, `this` on the top level refers to the global object, so `getBreed`'s `this.breed` refers to the `breed` property on the global object, which doesn't exist.

