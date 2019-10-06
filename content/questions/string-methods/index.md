---
title: String Methods
tags:
  - String methods
order: 34
date: '2019-10-06'
answers:
  - 'length'
  - 'indexOf'
  - 'search // correct'
  - 'find'
  - 'none'
---

String methods are used to work with string in Javascript. Which method would be used to find a specified value and return the position of the match?

For example, what method would tell you that `"bird"` is at position `4` in the following `word` string?

```javascript
const word = "The bird is the word"
```

<!-- explanation -->

The `search` method searches a string for a specified value and returns the position of the match. In this example, `word.search("bird")` will equal `4`.
