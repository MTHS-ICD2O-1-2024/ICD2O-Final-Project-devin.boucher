// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Devin Boucher
// Created on: April 2025
// This file contains the JS functions for index.html

'use strict'

let currentRotation = 0
let currentDisplayMode = "colors"

function spinSpinner() {
  let spins = Math.floor(Math.random() * 5) + 3
  let randomDegrees = Math.floor(Math.random() * 360)
  currentRotation = currentRotation + spins * 360 + randomDegrees

  let spinners = document.getElementsByClassName("spinner-image")
  var index = 0
  while (index < spinners.length) {
    let spinner = spinners[index]

    if (spinner.style.display === "block") {
      spinner.style.transition = "transform 3s ease-out"
      spinner.style.transform = "rotate(" + currentRotation + "deg)"
    } else {
      spinner.style.transform = "rotate(0deg)"
      spinner.style.transition = ""
    }
    index = index + 1
  }
}

function setDisplayMode(mode) {
  currentDisplayMode = mode
  updateSpinnerImage()
}

function updateSpinnerImage() {
  let sectionCount = document.getElementById("section-count").value
  let spinnerId = ""

  if (currentDisplayMode === "colors") {
    spinnerId = "spinnerC" + sectionCount
  } else {
    spinnerId = "spinnerN" + sectionCount
  }

  let spinners = document.getElementsByClassName("spinner-image")
  var index = 0
  while (index < spinners.length) {
    let spinner = spinners[index]

    if (spinner.id === spinnerId) {
      spinner.style.display = "block"
      spinner.style.transform = "rotate(0deg)"
      spinner.style.transition = ""
    } else {
      spinner.style.display = "none"
      spinner.style.transform = "rotate(0deg)"
      spinner.style.transition = ""
    }
    index = index + 1
  }
}

window.onload = function() {
  updateSpinnerImage()
}
