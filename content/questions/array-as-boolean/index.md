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
What does this snippet of code returns?

```javascript
function ArrayBolean(){
  if([] && [1])
    return [true, true]
  else if([] && ![1])
    return [true,false]
  else if(![] && [1])
    return [false,true]
  else
    return [false,false]
}
ArrayBolean()
```

<!-- explanation -->
In javascript both empty and non empty arrays are evaluated as true if they are not compared to a boolean, otherwise `[] == false` would evaluate to `true` because of the boolean comparison.