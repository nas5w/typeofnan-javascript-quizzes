---
title: Palindrome?
tags:
  - "string methods"
order: 58
date: Sun Oct 20 2019 15:23:46 GMT-0700 (Pacific Daylight Time)
answers: 
  - 'true // correct'
  - 'false'
---

Does the following function correctly assess 'hannah' to be a palindrome? In other words, what gets logged?

```javascript
function isPalindrome(str){
  var reverseText = str.split('').reverse().join('');
  return str == reverseText;
}

isPalindrome('hannah');
```

<!-- explanation -->

`split('')` will split the string into an array of letters, `reverse()` will reverse that array, and `join('')` will join the letters back together. If that reversed text is equal to the initial string, then we indeed know we have a palindrome!
