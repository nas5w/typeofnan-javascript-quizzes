---
title: Array Literal

tags:
  - array

order: 28

date: '2019-10-24'

answers:
  - '10, [ 2 ]'

  - 'An error is thrown'

  - '1, [ 2, 2 ]'

  - '10,  [ undefined, undefined ] // correct'
---

Consider the following `Array` Literal variables. What gets logged?

```javascript
const array1 = new Array(10);
let array2 = new Array(2);
array2 = array2.map((value, index) => value);

console.log(array1.length, array2);
```

<!-- explanation -->

For example `new Array(1,2)` will be create a array with list of argument. But in the above example we pass only one argument, in this case instead of creating array with list of argument it will create a array with passed argument length (it will consider the argument as array length) so the array item values will be `undefined`
