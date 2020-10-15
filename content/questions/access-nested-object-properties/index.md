---
title: Access nested object properties
tags:
  - comparison
order: 75
date: Thu Oct 15 2020 14:39:37 GMT+0200 (Central European Summer Time)
answers:
  - 'Uncaught TypeError: Cannot read property text of undefined'
  - 'null'
  - undefined // correct
---

Consider the following object. What gets logged?

```javascript
const person = {
  	name: {
		first: {
			text: 'John'
		}
	}
} 

console.log(person.name.second?.text);
```

<!-- explanation -->

The expression contains optional chaining syntax, which is a safe way to access nested object properties, even if an intermediate property doesn’t exist. 

The "standard" expression, without `?`:

```javascript
console.log(person.name.second.text);
```

will throw an error. 

The `?.` operator functions similarly to the `.` chaining operator, except that instead of causing an error if a reference is nullish (`null` or `undefined`), the expression short-circuits with a return value of `undefined`. When used with function calls, it returns `undefined` if the given function does not exist.

This results in shorter and simpler expressions when accessing chained properties when the possibility exists that a reference may be missing. It can also be helpful while exploring the content of an object when there's no known guarantee as to which properties are required.

Optional chaining was introduced as part of the ES2020 standard.
