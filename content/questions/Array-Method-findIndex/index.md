---
title: array.findIndex
tags:
  - array
order: 58
date: Tue Oct 22 2019 14:22:21 GMT-0600 (Mountain Daylight Time)
answers: 
  - 'True'
  - 'False // correct'
---

True or False: `array.findIndex` will return 0 when no elements pass the test.

<!-- explanation -->
`findIndex` will actually return a `-1` since `0` would be a legitimate array index! 

Under the hood, this array method executes a callback function for each index until a truthy value is returned. If the array length is 0 or if the callback never returns a truthy value then findIndex will return -1.
