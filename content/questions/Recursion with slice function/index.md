---
title: Recursion with slice()
tags:
- recursion
- slice
order: 17
date: '2019-10-05'
answers:
- 'Hello World'
- 'e'
- 'H // correct'
- 'd'
---

Consider the following recursive function. If we pass the string `"Hello World"` to it, what gets logged?

```javascript
var speak = str => {
if (str.length > 1) {
return speak(str.slice(0,1));
}
return str;
};
console.log(speak('Hello world'));
```
<!---explanation--->

The first time we call the function, `str.length` is greater than 1. We return the same function called on `str.slice(0,1)`, which is the string " "(that means, starting from no string). We repeat this process until the string reach the first character: the character "H".
[Note that, the characters are counting from left to right.]
 We then log that character.
