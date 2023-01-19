'use strict'
// Canvas static images register
const heart = document.getElementById('heart')
const heartFilled = document.getElementById('heartFilled')
const shuffle = document.getElementById('shuffle')
const loop = document.getElementById('loop')
const previous = document.getElementById('previous')
const next = document.getElementById('next')
const play = document.getElementById('play')
const pause = document.getElementById('pause')

// Canvas Update Events register
bgImage.onload = () => { render() }
cvImage.onload = () => { render() }
document.querySelectorAll('input').forEach((input) => { input.addEventListener('change', () => { render() }) })
