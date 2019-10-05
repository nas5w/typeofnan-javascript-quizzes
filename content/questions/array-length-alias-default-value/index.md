
---
title: string operation using destructuring

tags:

- string

- destructuring

order: 22

date: '2019-10-05'

answers:

- 'quiz'

- 'undefined'

- 'dev'

---

  

What will be the domain name ?

  

```javascript

const url= "quiz.typeofnan.dev";
const { length: l, [l - 1]: domain="quiz" } = url.split(".").filter(Boolean);
console.log(domain);

```

  

<!-- explanation -->

  

There are lot ways to find the length of the array in javascript, by using destructuring also we can get the length of the array and using es6 alias option result length is assigned to another variable `l (alias)`. By using alias we get one of the value from the array

`domain="quiz"` this one is the default value  when domain value is `undefined`
