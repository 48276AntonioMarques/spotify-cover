'use strict'

function drawBar(current) {

    const length = (1020 - 72 * 2) * current / 1000

    canvas.beginPath()
    canvas.fillStyle = "#FFFFFF"
    canvas.roundRect(96, 1470, length, 12)
    canvas.fill()
    canvas.closePath()
    
    canvas.beginPath()
    canvas.fillStyle = "#555555"
    canvas.roundRect(96 + length, 1470, 1020 - 72 * 2 - length, 12)
    canvas.fill()
    canvas.closePath()

    canvas.beginPath()
    canvas.fillStyle = "#FFFFFF"
    canvas.arc(96 + length, 1470 + 12 / 2, 24, 0, 2 * Math.PI)
    canvas.fill()
    canvas.closePath()
}