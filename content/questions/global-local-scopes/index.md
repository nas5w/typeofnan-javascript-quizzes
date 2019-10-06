---
title: Global Local
tags:
  - variables
  - scope
order: 1
date: '2019-10-06'
answers:
  - 5 and 10
  - undefined and 10 // correct
  - 5 and undefined
  - undefined and undefined
---

Consider the following code block. What gets logged?

```javascript
var x = 5;

(function() {
  console.log(x);
  var x = 10;
  console.log(x);
})();
```

<!-- explanation -->

This will print out undefined and 10 rather than 5 and 10 since JavaScript always moves variable declarations (not initializations) to the top of the scope, making the code equivalent to:

```javascript
var x = 5;

(function() {
  var x;
  console.log(x);
  x = 10;
  console.log(x);
})();
```
