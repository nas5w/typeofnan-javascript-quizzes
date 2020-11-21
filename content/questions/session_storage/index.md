---
title:
tags:
  - storage
order: 75
date: Sat Nov 21 2020 15:17:31 GMT-0800 (Pacific Standard Time)
answers:
  - 'Forever'
  - 'When the user closes the entire browser'
  - 'When the user closes the tab // correct'
  - 'When the user shuts down their computer'
---

How long is `some_value` accessible?

```javascript
sessionStorage.setItem('some_value', 007);
```

<!-- explanation -->

The data stored in `sessionStorage` is removed after closing the tab. It lives as long as the browser is open and is not shared between tabs.
