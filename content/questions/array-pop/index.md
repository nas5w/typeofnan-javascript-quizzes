---
title: Manipulate an Array with pop()
tags:
  - array
  - array.pop
order: 51
date: '2019-10-20'
answers:
  - 'var removedFromMyArray.pop()'
  - 'var removedFromMyArray = myArray.pop() // correct'
  - 'myArray.pop(removedFromMyArray)'
  - 'var removedFromMyArray.pop()'
---

Use the .pop() function to remove the last item from myArray, assigning the "popped off" value to removedFromMyArray.

```javascript
var myArray = [["John", 23], ["cat", 2]];

var removedFromMyArray;
```

<!-- explanation -->

Another way to change the data in an array is with the .pop() function.

.pop() is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.

Any type of entry can be "popped" off of an array - numbers, strings, even nested arrays.
