---
title: Currying and Partial Application
tags:
  - currying
  - functional programming
  - partial application
order: 59
date: Wed Oct 23 2019 19:19:23 GMT-0600 (Mountain Daylight Time)
answers:
  - '20'
  - '21'
  - '18 // correct'
  - '28'
  - '25'

---

What would be the ouput of the `console.log` statement in the following code:

```javascript
function summing(a, b) {
  return function(c) {
    return function(d, e) {
      return a + b + c + d + e;
    };
  };
}

const first = summing(1, 2, 3)
const second = first(4)(5, 6, 7);

console.log(second);
```

<!-- explanation -->

Currying and Partial application of functions is an important concept in Functional programming. Currying occurs when a function has the ability to take its arguments one at a time. Each time the function is provided an argument, it returns a function that will take the next of the arguments. When all the arguments required by the function are supplied, it returns its final result.

In Partial application of functions, some of the arguments are supplied to a function, which returns a function that will take the rest of the arguments, which when supplied, will return the final result of full function application with all of its arguments. (Read more about currying, partial application and Functional programming [here](https://github.com/getify/Functional-Light-JS/blob/master/manuscript/ch3.md/#chapter-3-managing-function-inputs).

In JavaScript, functions are not curried by default (some languages have curried functions by default). But we can make them curried as we did in the exercise.

The `summing` function is supposed to take 5 arguments, but, by returning functions in the intermediate stages, we have tried to curry it. But note that `summing` does not take its arguments one at a time, the first function takes two arguments, then the middle function takes one argument, the third function takes two arguments, which when executed adds all the numbers. (Extra arguments are ignored by JS). The final result can be calculated in one line as `summing(1, 2)(4)(5, 6)`. The fact that all the arguments are remembered by the final function is called closure.

Curried functions in JS are more readable if arrow functions are used. `summing` using arrow functions can be written in one line as:

```javascript
const summing = (a, b) => c => (d, e) => a + b + c + d + e;

// fully curried form of summing will be written as:

const summing = a => b => c => d => e => a + b + c + d + e;
```
