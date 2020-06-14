---
title: Implicit Type Coercion
tags:
  - coercion
  - types
  - type casting
order: 52
date: '2019-10-19'
answers: 
  - 'greeting + year.toString()'
  - 'greeting + String(year)'
  - 'greeting + year // correct'
---

Consider the following variables `greeting` and `year`.

```javascript
const greeting = "Hello";
const year = 2019;
```

Which of the following is an example of implicit coercion in JavaScript?

<!-- explanation -->

Some programming languages have a concept called type casting. This means that, if you want to convert one type to another type, you have to make the conversion explicit. In JavaScript there is a mechanism called _implicit coercion_, which converts types to other types as necessary. In this case, the addition operator `+` automatically converts `2019` to a string so it can be concatenated with the string `"Hello"`. In contrast, `year.toString()` and `String(year)` are both *explicitly* converting it to a string.
