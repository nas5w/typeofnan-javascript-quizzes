---
title: Pass by Value
tags:
  - object
  - mutability
  - data types
order: 24
date: '2019-10-02'
answers:
  - 'football, \'Lisa prefers Johnny\', Chris R'
  - 'roofsitting, \'Lisa prefers Mark\', Doggy'
  - 'roofsitting, \'Lisa prefers Johnny\', Doggy // correct'
  - 'football, \'Lisa prefers Mark\', Chris R'
---

When setting variables equal to each other and then changing one of them, does it change the other? Consider the following code. What is logged?

```javascript
let a1 = {
    name: 'Johnny',
    hobby: 'football'
}

let b1 = 'Lisa prefers Johnny';

let c1 = ['Denny', 'Michelle', 'Chris R'];

let a2 = a1;
let b2 = b1;
let c2 = c1;

a2.hobby = 'roofsitting';
b2 = 'Lisa prefers Mark';
c2[2] = 'Doggy';

console.log(a1.hobby);
console.log(b1);
console.log(c1[2]);
```

<!-- explanation -->

All JavaScript variables are passed by value - technically. For arrays, functions, and objects, the value is a reference to the original object. When changing properties of that object, the changes are reflected in the original. However, changing the value of a primitive data type such as string (or numnber, or boolean) does not change the original variable, as shown in `b1`'s value.
