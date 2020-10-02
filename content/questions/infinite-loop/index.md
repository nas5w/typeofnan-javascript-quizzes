---
title: Infinite Loop
tags:
  - Loops
order: 75
date: Fri Oct 02 2020 23:48:10 GMT+0300 (GMT+03:00)
answers:
  - 'for(let i = 0; i < 10; i--) {...}'
  - 'while(true) {...}'
  - 'do {...} while(false) // correct'
  - 'for(let i = 10; i > 0; i++) {...}'
---

 What Loop is not infinite?

 ```javascript
for(let i = 0; i < 10; i--) {...};

while(true) {...};

do {...} while(false);

for(let i = 10; i > 0; i++) {...};
 ```

<!-- explanation -->

Option C is the correct answer becuase begin loop will complete these code and then review the conditions with value equitable false.
