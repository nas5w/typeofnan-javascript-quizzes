---
title: Direction of Loops
tags:
  - Loops
order: 57
date: Sun Oct 20 2019
answers:
  - 'Scans across a row before going to the one below // correct'
  - 'Scans down the column before going to the next to the right'
  - 'None of the above'
---

In which direction will the following code scan an image?

```javascript
const image = new Image();
const maxHeight = image.height + 1;
const maxWidth = image.width + 1;

for (let i = 0; i < maxHeight; i++) {
  for (let j = 0; j < maxWidth; j++) {
    // Obtaining values of pixels, assuming function getPixel(y, x) takes argument y as Y-coordinate and x as X-coordinate
    const pixel = getPixel(i, j);
    const pixelValues = { 
      red: pixel.getRed(), 
      green: pixel.getGreen(), 
      blue: pixel.getBlue()
    };
    // Update pixel color scheme
    pixelValues.red /= 2;
    pixelValues.green /= 3;
    pixelValues.blue *= 2;
  }
}
```

<!-- explanation -->

Option A is the correct answer becuase value `i` will only update once all of the values of `j` have been processed.  So, it will read across the row first before going to the next one below. Note all the pixel code is essentially a distraction.
