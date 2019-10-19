---
title: Short-Circuit Notification(s)
tags:
  - short-circuit
order: 9
date: '2019-09-27'
answers:
  - 'You have 1 notification'
  - 'You have 1 notifications'
  - 'Something else // correct'
---

Let's display some notifications to our user! What gets logged in the following snippet?

```javascript
const notifications = 1;

console.log(
  `You have ${notifications} notification${notifications !==
    1 && 's'}`
);
```

<!-- explanation -->

Short-hand notation for `false && something` would not see what is `something` and evaluate it as false.  Here `notifications !== 1` is `false`.  So, unfortunately, our short-circuit evaluation will not work as intended here: `notifications !== 1 && 's'` evaluates to `false`, meaning we will actually be logging `You have 1 notificationfalse`. If we want our snippet to work correctly, we could consider a ternary operator.
