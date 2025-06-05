// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: April 2025
// This file contains the JS functions for index.html

'use strict'

let currentDisplayMode = 'colors'

// eslint-disable-next-line no-unused-vars
function spinSpinner () {
  const randomDegrees = Math.floor(Math.random() * 360)

  const spinners = document.getElementsByClassName('spinner-image')

  // Reference: How the for...of loop works
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
  for (const spinner of spinners) {
    // Reference: How the .hidden property works
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden
    if (spinner.hidden === false) {
    // Rotate the spinner element by a random number of degrees
    // Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate
    // Reference: https://www.w3schools.com/jsref/prop_style_transform.asp
    spinner.style.transform = 'rotate(' + randomDegrees + 'deg)'
    }
  }
}

// eslint-disable-next-line no-unused-vars
function setDisplayMode () {
  // Toggle between 'colors' and 'numbers'
  if (currentDisplayMode === 'colors') {
    currentDisplayMode = 'numbers'
  } else {
    currentDisplayMode = 'colors'
  }

  updateSpinnerImage()
}

function updateSpinnerImage () {
  const sectionCount = document.getElementById('section-count').value
  let spinnerId = ''

  if (currentDisplayMode === 'colors') {
    spinnerId = 'spinnerC' + sectionCount
  } else {
    spinnerId = 'spinnerN' + sectionCount
  }

  const spinners = document.getElementsByClassName('spinner-image')

  for (const spinner of spinners) {
    // Reference: How the .id property works
    // https://www.w3schools.com/html/html_id.asp
    if (spinner.id === spinnerId) {
      spinner.hidden = false
    } else {
      spinner.hidden = true
    }
  }
}

window.onload = function () {
  updateSpinnerImage()
}
