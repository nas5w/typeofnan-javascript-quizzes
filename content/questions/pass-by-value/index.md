---
title: Pass by Value
tags:
  - object
  - mutability
  - data types
order: 24
date: '2019-10-02'
answers:
  - 'football, "Lisa prefers Johnny", Chris R'
  - 'roofsitting, "Lisa prefers Mark", Doggy'
  - 'roofsitting, "Lisa prefers Johnny", Doggy // correct'
  - 'football, "Lisa prefers Mark", Chris R'
---

When setting variables equal to each other and then changing one of them, does it change the other? Consider the following code. What is logged?

```javascript
let a1 = {
  name: 'Johnny',
  hobby: 'football'
};

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

Because `a2` and `c2` refer to the same objects in memory as `a1` and `c1`, when their properties `hobby` and `[2]` were changed, those changes could also be seen through `a1` and `c1`.  The change made to `b2` was not changing a property, rather, replacing the `b2` variable itself.  Replacing a variable with a new value has no effect on the original value, so `b1` remained unchanged.

