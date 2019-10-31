---
title: Translating into Binary
tags:
  - native js
  - binary
order: 73
date: Thu Oct 31 2019 02:59:27 GMT+0000 (Coordinated Universal Time)
answers:
'let letterTrans = original[j].charCodeAt().toString(2); //correct'
'let letterTrans = original[j].binary(0,1);'
'let letterTrans = original[j].charCodeAt(binary);'
---

'Please select the correct methods translates the word into binary.'

```javascript
    let translation = [];

    // Running through Array of characters and letters to find correct value
    for (let j = 0; j < original.length; j++) {
        //Native Code to translate letters to binary
        let letterTranslation = original[j].[missing methods]
        translation.push(letterTranslation)
    }

    console.log(translation)

```

<!-- explanation -->

