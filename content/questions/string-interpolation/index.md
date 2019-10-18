---
title: String Interpolation
tags:
  - strings
  - interpolation
  - template literals
order: 51
date: Fri Oct 18 2019 22:06:13 GMT+0530 (India Standard Time)
answers: 
  - "possible! You should see a therapist after so much JavaScript lol"
  - "Impossible! You should see a therapist after so much JavaScript lol // correct"
  - "possible! You shouldn't see a therapist after so much JavaScript lol"
  - "Impossible! You shouldn't see a therapist after so much JavaScript lol"
---

What's the value of output?

```javascript
const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`
```

<!-- explanation -->

[] is a truthy value. With the && operator, the right-hand value will be returned if the left-hand value is a truthy value. In this case, the left-hand value [] is a truthy value, so "Im' gets returned.

"" is a falsy value. If the left-hand value is falsy, nothing gets returned. n't doesn't get returned.
