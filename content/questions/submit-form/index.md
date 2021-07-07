---
title: Submit a form using JavaScript
tags:
  - forms
  - dom
order: 72
date: Mon Oct 28 2019 14:37:01 GMT+0100 (Central European Standard Time)
answers:
  - 'document.form[0].formSubmit();'
  - 'document.form.submitNoValidation();'
  - 'document.getElementById("myForm").submit(); // correct'
---

Submit a form without triggering constraint validations set inside HTML `<form>` element.

<!-- explanation -->

The `submit()` method is similar, but not identical to, activating a form's submit `<button>`.

No `submit` event is raised. In particular, the form's `onsubmit` event handler is not run.

Constraint validation is not triggered.

Calling the `submit()` method on the `HTMLFormElement` interface doesn't trigger a constraint validation. In other words, this method sends the form data to the server even if doesn't satisfy the constraints. If you want to include validation, call the `click()` method on a submit button instead.
