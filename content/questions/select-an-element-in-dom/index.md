---
title: Select An Element in DOM
tags:
  - dom
order: 74
date: '2020-10-02'
answers:
  - "document.querySelector('ourProducts a')"
  - "document.querySelector('a.active') // correct"
  - "document.getElementById('#ourProducts')"
---

Consider this is DOM structure

```html
<body>
  <nav>
    <a id="ourProducts" class="menu-item active">Our Products</a>
    <a id="contactUs" class="menu-item">Contact Us</a>
    <a id="aboutUs" class="menu-item">About Us</a>
  </nav>
</body>
```

How would you want to get this element `<a id="ourProducts" class="menu-item active">Our Products</a>` in javascript.

<!-- explanation -->

In order to get element easily, we have to understand how css selector working first. 
`document.querySelector()` accept an argument of css selector, And in order to get it is with `document.querySelector('a.active')`. 

More details: [MDN doc here](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) 

We can also use `document.getElementById`, but in this case, using `#ourProducts` is not correct, because behind the scene, browser already prefix it with '#'
Hence the correct way is `document.getElementById('ourProducts')`
