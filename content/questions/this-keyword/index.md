---
title: "this" keyword
tags:
  - this
order: 36
date: '2019-10-14'
answers:
  - 'myFunction'
  - 'Window // correct'
  - 'Undefined'
---

What gets logged when we try to call `myFunction()`?

```javascript
function myFunction() {
      console.log(this);
    }
    myFunction();
```

<!-- explanation -->

In this case "this" references the window.
Why? Because it isn't tied to any specific object in order to reference so it references the closest object, which would globally be the window.

In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called.

