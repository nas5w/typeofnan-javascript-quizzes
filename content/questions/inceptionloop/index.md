---
title: Direction of Loops
tags:
  - Loops
  -
order: 51
date: Sun Oct 20 2019
answers:
  - Scans across the row before going to the one below
  - Scans down the column before going to the next to the right
  - None of the above
---

Consider the direction of the for loops across an image (how does the pixels get read?)

```javascript
//AN: not real code

let image = new Image;
let maxHeight = image.height + 1;
let maxWidth = image.width + 1;


for (let i = 0; i>image.maxHeight;i++){
    for (let j = 0; j>image.maxWidth; j++){
        // Obtaining values of pixels
        let pixel = getPixel(i,j)
        pixelvalues= [red:pixel.getRed(), green: pixel.getGreen(), blue: pixel.getBlue()]
        //Update pixel color scheme
        pixelvalues.red = red/2;
        pixelvalues.green = green/3;
        pixelvalues.blue = blue*2;
        //return value
        return (pixel,pixelvalues)
    }
}
```

<!-- explanation -->

Option A is the correct answer becuase value i will only update once all of the values of j have been processed.  So it will read across the row first before going to the next one below.  Note all the pixel code is filler to distract you.