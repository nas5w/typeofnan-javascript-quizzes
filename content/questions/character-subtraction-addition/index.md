---
title: Character Subtraction Addition
tags:
  - characters
  - Addition
  - Subtraction
order: 72
date: Wed Oct 30 2019 22:43:33 GMT+1300 (New Zealand Daylight Time)
answers: 
  - '91 NaN True'
  - 'NaN NaN True'
  - '91 90 False // correct'
  - '91 90 True'
---


What are the outputs to the following commands:

```javascript
console.log(9 + "1")
console.log(9 + "1" - "1")
console.log((0.5 + 0.1 == 0.6) == (0.1 + 0.2 == 0.3))
```

<!-- explanation -->
Lets go through each of the equations one by one  
&nbsp;1. `console.log(9 + "1")`: Here since the types are different, JavaScript performs string concatination since it reads the type of "1" as a string and thus just combines the two strings together to get the output as 91  
&nbsp;2. `console.log(9 + "1" - "1")`: With what we have above, we know `9 + "1" = 91`, and since `- "1"` doesn't mean anything to do with strings, it assumes them to both be numbers and performs arithmetic subtraction to get the ouput `90`  
&nbsp;3. `console.log((0.5 + 0.1 == 0.6) == (0.1 + 0.2 == 0.3))`: While `0.5 + 0.1 == 0.6` is `True` as this is what we expect, when we try to add 0.1 and 0.2, we'll end up with a floating point error as 0.1 and 0.2 aren't perfectly 0.1 or 0.2, when we add we don't end up with exactly 0.3, due to this rounding error. This means we have `True == False` which is obviously `False`, so our output is also `False`
