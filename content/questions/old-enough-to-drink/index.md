---
title: Old Enough to Drink
tags: 
  - conditional
order: 76
date: '2021-04-10'
answers:
  - 'Option a: `if (age < 21) {
		return "Sorry, you\'re too young.";
	  } else {
		return "Hey, you may enter the bar.";
	  }`'

  - 'Option b: `if (age > 21) {
		return "Hey, you may enter the bar";
	} else {
		return "Sorry, you\'re too young.";
	}` // correct'

  - 'Option c: `if (age < 21) {
		return "Hey, you may enter the bar";
	} else {
		return "Sorry, you\'re too young.";
	}`'
---

 Friday Night Drinks! Create a variable that holds a person's age. If their age is greater than 21, return "Hey, you may enter the bar"; otherwise return "Sorry, you're too young."


```javascript

const age = 21;

function oldEnough() {

	if (age > 21) {
		return "Hey, you may enter the bar";
	} else {
		return "Sorry, you're too young.";
	}
};

console.log(oldEnough());
```

<!-- explanation -->

Here's a simple conditional to set a variable that will determine whether or not a person is old enough to have an adult beverage!


