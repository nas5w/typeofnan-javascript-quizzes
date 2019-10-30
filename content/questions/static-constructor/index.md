---
title: Static constructor
tags:
  - classes
order: 72
date: Tue Oct 29 2019 22:56:13 GMT-0600 (Central Standard Time)
answers: 
  - 'undefined undefined // correct'
  - 'rainbow rainbow'
  - 'rainbow undefined'
---
Given the following statement, what will be the logged result?
```javascript
class Mod {
  static constructor() {
    this.color = 'rainbow'
  }
  modColor() {
    return this.color
  }
}

class Ref extends Mod {
  refColor() {
    return this.color
  }
}

const R = new Ref
console.log(R.refColor())
console.log(R.modColor())
```

<!-- explanation -->
Simple and plain: static methods doesn't have access to the object objects, but we can send information to it through parameters; [More info](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes/static)
