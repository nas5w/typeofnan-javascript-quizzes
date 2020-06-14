---
title: Console Log Fetch
tags:
  - fetch
order: 6
date: '2019-09-27'
answers:
  - 'The fetch function'
  - 'A reference error'
  - 'It depends on the environment you are in // correct'
---

What gets logged when I try to log `fetch`?

```javascript
console.log(fetch);
```

<!-- explanation -->

What happens when you `console.log(fetch)` really depends on your current environment. If you `console.log` it in a [browser version](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#Browser_compatibility) that has a `window.fetch` method, you will log the fetch function. If you have an older browser, or are not in a browser environment, you will receive a ReferenceError.
