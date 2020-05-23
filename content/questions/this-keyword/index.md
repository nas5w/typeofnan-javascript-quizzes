---
title: this Keyword
tags:
  - this
order: 59
date: '2019-10-14'
answers:
  - 'myFunction'
  - 'Window // correct'
  - 'undefined'
---

When running JavaScript in the browser, what gets logged when we try to call `myFunction()`?

```javascript
function myFunction() {
  console.log(this);
}
myFunction();
```

<!-- explanation -->

In this case, `this` references the window. Why? Because `myFunction` was not called on an object, nor was a particular `this` set via `.bind` or `.call`. It's a plain standalone function which was invoked without a calling context, so inside it, `this` will refer to the global object (which is the `window`). (If we were in strict mode instead, the value of `this` when there is no calling context is `undefined`.)

A function will have a `this` value other than the `window` or `undefined` when one of the following occurs:

* The function is called as a property of an object, eg `myObj.myFn()` will call `myFn` with a `this` value of `myObj`.
* The function's `this` was bound to a particular object with `.bind` - eg `const boundFn = myFn.bind(obj); boundFn();` will result in `myFn` being called with a `this` value of `obj`.
* The function was invoked via `.call`. Eg `myFn.call(obj)` will result in `myFn` being called with a `this` value of `obj`.

These are all applicable to full-fledged `function`s only - arrow functions, in contrast, always have their `this` inherit from the parent block.

 A `this` value can't be set by assignment during execution, and it may be different each time the function is called.
