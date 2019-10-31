---
title: Translating into Binary
tags:
  - native js
  - binary
order: 73
date: Thu Oct 31 2019 02:59:27 GMT+0000 (Coordinated Universal Time)
answers:
'let letterTrans = word[j].charCodeAt().toString(2); //correct'
'let letterTrans = word[j].binary(0,1);'
'let letterTrans = word[j].charCodeAt(binary);'
---

'Please select the correct methods translates the word into binary.'

```javascript
    let word = 'hello world';
    let translation = [];

    // Running through Array of characters and letters to find correct value
    for (let j = 0; j < word.length; j++) {
        //Native Code to translate letters to binary
        let letterTranslation = word[j].[missing methods]
        translation.push(letterTranslation)
    }

    console.log(translation)

```

<!-- explanation -->

The reason why answer 1 is correct is that because we divided up the word first into individual letters, you need to use the charCodeAt() to get the Ascii Code, then afterwords you can convert that Ascii Code into binary using the toString(2) method.
