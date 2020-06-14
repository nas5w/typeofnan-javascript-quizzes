---
title: Template Literals
tags:
  - compiling
  - scripting
  - ie11
  - babel
order: 53
date: Sat Oct 12 2019 17:08:35 GMT-0400 (Eastern Daylight Time)
answers:
  - ecmascript
  - es2015 // correct
  - stage-6
---

Which JavaScript language version supports template literals syntax, like below?

```javascript
`helloworld - This is a string`
```

<!-- explanation -->

Template literals are a feature of ES2015 (also known as ES6). In earlier environments, such as on IE11, this code will throw a SyntaxError.

Like with all modern syntax, in order to write concise, readable code in the latest and greatest version of the language, while still permitting obsolete browsers to understand your code, use a transpiler like [Babel](https://babeljs.io/) to automatically translate your code down to ES5-compatible syntax.
