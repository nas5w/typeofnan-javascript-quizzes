---
title: Object.keys() output ordering
tags:
  - Object
order: 75
date: Mon Oct 05 2020 19:48:18 GMT+0530 (India Standard Time)
answers: 
  - [name,1,11,age,country,9]
  - [1,9,11,name,age,country]
  - [name,age,country,1,11,9]
  - [1,11,9,name,age,country]
---

What will be the output of the following code snippet?

```javascript

const json = {
  "name": "John Doe",
  "1": "1K",
  "11": "1M",
  "age": 27,
  "country": "India",
  "9": "9M"
};

console.log(Object.keys(json));

```

<!-- explanation -->

Answer is B: `[1,9,11,name,age,country]`

Object keys are not randomly ordered, rather it follows the following rule:

First integer keys are picked in sorted order i.e. 1,9,11

Followed by string keys - in order of their occurrence. i.e. name,age,country
