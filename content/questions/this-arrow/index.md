---
title: This arrow
tags:
  - arrow functions
  - this
  - objects
order: 73
date: Sun Nov 17 2019 18:32:11 GMT+0500
answers:
  - 'NaN 25 NaN' 
  - '40 25 200'
  - '40 ReferenceError 200' 
  - 'NaN 25 TypeError // correct'

---

Consider the following code block. What gets logged?

```javascript
const object = {
  _value : 20,

  getValueX2 : () => {
    return this._value * 2;
  },

  getValueX10 : () => {
    return this.getValueX2() * 5;
  },

  getValuePlus5 : () => {
    return object._value + 5;
  },
};

console.log(object.getValueX2());
console.log(object.getValuePlus5());
console.log(object.getValueX10());
```

<!-- explanation -->

If we use arrow function as methods, their (`this`) will be (`Window {...} (or the global object)`). We dont have (`_value`) in global object, so (`object.getValueX2()`) will return (`undefined * 2`) - (`NaN`). Then we call (`object.getValuePlus5()`) and get (`20 + 5`) - (`25`). If we try to call (`object.getValueX10()`) it will equals (`Window.getValueX2() * 5`) and because the window object has no such method it will throw error(`Uncaught TypeError: this.getValueX2 is not a function`).


<a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">MDN Reference</a>
