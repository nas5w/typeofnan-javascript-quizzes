---
title: Palindrome
tags:
  - 
order: 58
date: Sun Oct 20 2019 15:23:46 GMT-0700 (Pacific Daylight Time)
answers: 
  - 'true'
  - 'false'
---

What is the following function return ?

```javascript
function isPalindrome(str){
  var reverseText = str.split('').reverse().join('');
  return str == reverseText;
}

isPalindrome('hannah');
```

<!-- explanation -->

