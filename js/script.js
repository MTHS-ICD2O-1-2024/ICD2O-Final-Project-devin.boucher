// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: April 2025
// This file contains the JS functions for index.html

'use strict'

// eslint-disable-next-line no-unused-vars

let currentDisplayMode = 'colors'

function spinSpinner () {
  const randomDegrees = Math.floor(Math.random() * 360)

  const spinners = document.getElementsByClassName('spinner-image')
  let index = 0

  while (index < spinners.length) {
    // Reference: How to use item(index) with HTMLCollections
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection/item
    const spinner = spinners.item(index)

    // Reference: How the .hidden property works
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden
    if (spinner.hidden === false) {
      spinner.style.transform = 'rotate(' + randomDegrees + 'deg'
    }

    index = index + 1
  }
}

function setDisplayMode (mode) {
  currentDisplayMode = mode
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
  let index = 0

  while (index < spinners.length) {
    const spinner = spinners.item(index)

    if (spinner.id === spinnerId) {
      spinner.hidden = false
    } else {
      spinner.hidden = true
    }

    index = index + 1
  }
}

window.onload = function () {
  updateSpinnerImage()
}
