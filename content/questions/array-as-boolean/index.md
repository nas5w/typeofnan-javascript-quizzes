---
title: Array as boolean
tags:
  - array
  - implicit convesion
  - boolean
  - if statement
order: 59
date: Thu Oct 24 2019 16:38:30 GMT+0200 (Central European Summer Time)
answers: 
  - '[true, true] // correct'
  - '[false, true]'
  - '[true, false]'
  - '[false, false]'
---

What does the below function return?

```javascript
function ArrayBoolean(){
  if([] && [1])
    return [true, true];
  else if([] && ![1])
    return [true,false];
  else if(![] && [1])
    return [false,true];
  else
    return [false,false];
}
ArrayBoolean();
```

<!-- explanation -->
In JavaScript, both empty and non empty arrays are truthy, like all objects. This is not the same thing as comparison - for example, if the arrays were loosely compared to a Boolean, the results would be different. `[] == false` would evaluate to `true` because the empty array, when converted into a primitive, is falsey.

The first `if` statement is fulfilled, so `[true, true]` is returned.
