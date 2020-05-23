---
title: Batman v. Superman
tags:
  - hof
  - function
order: 15
date: '2019-09-29'
answers:
  - '"Batman"'
  - '"Superman"'
  - '"Batman" "Superman" // correct'
  - 'Nothing gets logged'
---

Consider the following `superheroMaker` function. What gets logged when we pass the following two inputs?

```javascript
const superheroMaker = a => {
  return a instanceof Function ? a() : a;
};

console.log(superheroMaker(() => 'Batman'));
console.log(superheroMaker('Superman'));
```

<!-- explanation -->

When passing `() => 'Batman'` to `superheroMaker`, `a` is an instance of `Function`. Therefore, the function gets called, returning the string `Batman`. When passing `'Superman'` to `superheroMaker`, `a` is not an instance of `Function` and therefore the string `'Superman'` is just returned. Therefore, the output is both `Batman` and `Superman`.
