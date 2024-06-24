---
title: functions, constructors and `this`
tags:
  - function
  - this
  - constructor
order: 72
date: Thu Oct 31 2019 23:44:19 GMT-0600 (Central Standard Time)
answers:
  - 'undefined // correct'
  - 'Thinker Bell'
  - '{ play: "Thinker Bell", sound: "la" }'
  - NaN
---


Let's say you have a fancy defined constructor function `HellBells`.

```javascript
function HellBells(song) {
    const sound = ‘la’
    this = {
       play: song,
       sound,
    };
}

```

And then it comes octocat and tries to use the function as follows.
```javascript
console.log(HellBells(‘Thinker Bell’));

```

What is the output of that `console.log`?

<!-- explanation -->

This function has a little thing, that it has no `return`, which doesn't metter that much if you use it as a constructor ussing `new`, but unfortunatly ocotcat didn't do that.

In order to have an output different of `undefined` he should do:

```javascript
console.log(new HellBells(‘Thinker Bell’));
// {
//  play: 'Thinker Bell',
//   sound: 'la'
// }
```

