---
title: String Operations and Array Destructuring
tags:
  - string
  - destructuring
order: 27
date: '2019-10-05'
answers:
  - '"quiz"'
  - '"typeofnan"'
  - '"dev" // correct'
  - 'undefined'
  - 'An error is thrown'
---

In the following example, we attempt to get part of our URL's domain name. What ends up being logged?

```javascript
const url = 'quiz.typeofnan.dev';
const { length: ln, [ln - 1]: domain = 'quiz' } = url
  .split('.')
  .filter(Boolean);
console.log(domain);
```

<!-- explanation -->

This question applies a number of different concepts surrounding object destructuring! Let's take it one piece at a time.

The following code simply assigns the string `quiz.typeofnan.dev` to the variable `url`.

```javascript
const url = 'quiz.typeofnan.dev';
```

The next line is where a lot of the action happens. It's generally best to first consider what's happening on the right side of the assignment, so let's first consider the following code:

```javascript
url.split('.').filter(Boolean);
```

`url.split('.')` will split our `url` string by the `.` character, resulting in the following array: `['quiz', 'typeofnan', 'dev']`. Applying `filter(Boolean)` on this array is the same as `filter(el => Boolean(el))`. Since all of the elements are truthy, `Boolean(el)` will always be `true`, meaning we don't actually filter anything out.

The next bit applies object destructuring. Since our array is indeed an object, this is allowed.

```javascript
const { length: ln, [ln - 1]: domain = 'quiz' } = [
  'quiz',
  'typeofnan',
  'dev'
];
```

In this destructuring, we use _aliasing_ to assign the array's `length` property to a variable we call `ln`. Next, we use aliasing again to assign the `ln - 1`th element to the `domain` variable. The `= 'quiz'` is a default value, meaning `domain` will equal `'quiz'` if there is no `ln - 1`th array element.

Applying this to our array, `length`, which we assign to `ln`, is `3`, `ln - 1` is `2`, and the item at index `2` of our array is `dev`. Therefore, the answer is `dev`!
