---
title: Implicit semicolon insertion
tags:
  - semicolon
  - implicit
  - print
order: 58
date: Thu Oct 24 2019 16:09:25 GMT+0200 (Central European Summer Time)
answers: 
  - 'Giovanni'
  - 'Good morning, Giovanni'
  - 'Good morning,'
  - 'undefined // correct'
---
What does this snippet of code returns?
```javascript
  function Greetings(name) {
    return 
      "Good morning, " + name
  }

Greetings("Giovanni")
```


<!-- explanation -->
When inserting a new line, javascript implicitly add a semicolon at the end of it. This means that the return statement would look like `return;` that evaluate to `undefined`.