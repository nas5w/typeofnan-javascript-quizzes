---
title: Type Coercion
tags:
  - coercion
  - types
  - type casting
order: 51
date: '2019-10-19'
answers: 
  - 'greeting + year.toString()'
  - 'greeting + String(year)'
  - 'greeting + year // correct'
---

Some programming languages have a concept called type casting which means more or less: if I want to convert a number or another entity to another type, I have to make the conversion explicit.

Consider the following example converting a number to a string:
```javascript
const greeting = "Hello";
const year = 2019;
const yearString = year.toString();
greeting + yearString; // returns "Hello2019"
```

Which of the following is an example of implicit coercion in JavaScript?

<!-- explanation -->

In JavaScript there is a subtle mechanic called implicit conversion that does not prevent us from adding numbers and strings. The addition operator + in JavaScript automatically converts any of the two operands to a string if at least one of them is… a string!