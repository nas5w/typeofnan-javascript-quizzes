---
title: Frequency Counter
tags:
  - Array
  - Key
order: 75
date: Sat Oct 03 2020 11:37:42 GMT+0530 (India Standard Time)
answers: 
  - 'True // correct'
  - 'False'
---

Consider the following code block. What is the correct Output?
```javascript
function frequencyCounter(arr1, arr2){
if(arr1.length !== arr2.length){
    return false;
}
for(let i = 0; i < arr1.length; i++){
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if(correctIndex === -1) {
    return false;
    }
    arr2.splice(correctIndex,1)
}
    return true;
}
console.log(frequencyCounter([1,2,3,2], [9,1,4,4]));  
```
<!-- explanation -->
The function should return true if every value in the array has it's corresponding value squared in the second array.Also frequency of values must be the same.Below Block will give output as false.

```javascript
function frequencyCounter(arr1, arr2){
if(arr1.length !== arr2.length){
    return false;
}
for(let i = 0; i < arr1.length; i++){
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if(correctIndex === -1) {
    return false;
    }
    arr2.splice(correctIndex,1)
}
    return true;
}
console.log(frequencyCounter([1,2,3,2], [9,1]));   
```