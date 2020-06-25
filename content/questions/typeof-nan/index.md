---
title: Typeof NaN
tags:
  - number
  - operator
  - comparison
  - equality
  - type coercion
  - operation precedence
order: 72
date: Thu Jun 25 2020 12:16:01 GMT+0100 (West Africa Standard Time)
answers: 
  - 'false, "2number", true, "apple"'
  - 'true, "2number", false, "orange"'
  - 'false, "NaNnumber", false, "orange" // correct'
  - 'true, "NaNnumber", true, "apple"'
---

Looking at the code below, what would be logged?

```js
console.log(parseInt('a123') == Number("123z"));

console.log(typeof "10"/5 + typeof NaN);

console.log(isNaN(("10"/5))); 

console.log(typeof (50 + +"100px") === "number" ? "orange" : "apple");

```

<!-- explanation -->

In the first log, both `parseInt()` and `Number()` would return `NaN` as these strings can't be parsed into numbers. This would result in

```js
console.log(NaN == NaN)
```

since `NaN` can never equal `NaN`, `false` is logged.

In the second log, `typeof "10"/5` returns `NaN` because of operator precedence.

Since the `typeof` operator has a higher precedence than the divide operator `/`, we evaluate `typeof "10"` which returns `"string"`, we then have `"string"/5`, which results in `NaN`.

`typeof NaN` returns the string `"number". Therefore,  the concatenated output `"NaNnumber"`.

```js
console.log( typeof "10"/5 + typeof NaN);
console.log( "string"/5 + "number")
console.log( NaN + "number")
console.log( "NaNnumber")
```

You can read more about operator precedence [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

In the third log, `"10"/5` would return `2` because of type coercion and since `2` is not equal to `NaN`, the output is false

```js
console.log(isNaN( ("10"/5) )); 
console.log(isNaN(2)); 
console.log( false ); 
```

The fourth log, first converts `"100px"` to `NaN` as the `+` operator forces a string to convert to number

```js
console.log( typeof (50 + +"100px") === "number" ? "orange" : "apple"  );
console.log( typeof (50 + NaN) === "number" ? "orange" : "apple"  );
```

Since `NaN` propagates, any operation done with `NaN` leads to `NaN`, `50 + NaN` equals `NaN`

```js
console.log( typeof (NaN) === "number" ? "orange" : "apple"  );
```

since `typeof NaN` returns `"number"` it resolves to true and returns `"orange"`.
