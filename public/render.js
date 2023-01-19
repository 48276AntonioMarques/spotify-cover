'use strict'
const canvas = document.getElementById('preview').getContext('2d')

function render() {
    // Draw Background
    const bgMethod = Array.prototype.slice.call(document.querySelectorAll('input[type=radio]')).filter((e) => {
        return e.checked
    })[0].value
    switch(bgMethod) {
        case 'image':
            if (bgImage.src !== null) {
                canvas.fillStyle = '#000000'
                canvas.fillRect(0, 0, 1080, 1920)
                const alpha = document.getElementById('bg-brightness').value
                canvas.globalAlpha = alpha / 100
                canvas.drawImage(bgImage, 0, 0, 1080, 1920)
                canvas.globalAlpha = 1.0
            }
            break
        default:
            var gnt = canvas.createLinearGradient(0, 0, 0, 1920)
            gnt.addColorStop(0, document.getElementById("top").value)
            gnt.addColorStop(1, document.getElementById("bot").value)
            canvas.fillStyle = gnt
            canvas.fillRect(0, 0, 1080, 1920)
            // canvas.fillStyle = '#000000'
            // canvas.fillRect(0, 0, 1080, 1920)
            break
    }

    // Draw Cover (cover starts at x=72,y=240 and end at x=1020,y=1200)
    canvas.fillStyle = '#000000'
    canvas.fillRect(72, 240, 1020 - 72, 1200 - 240)
    const alpha = document.getElementById('brightness').value
    canvas.globalAlpha = alpha / 100
    canvas.drawImage(cvImage, 72, 240, 1020 - 72, 1200 - 240)
    canvas.globalAlpha = 1.0

    // Draw Name
    var name = document.getElementById('name').value
    canvas.font = 'bold 52px Arial'
    canvas.fillStyle = '#FFFFFF'
    canvas.fillText(name, 96, 1340)

    // Draw Author
    var author = document.getElementById('author').value
    canvas.font = '44px Arial'
    canvas.fillStyle = '#AAAAAA'
    canvas.fillText(author, 96, 1410)

    // Draw Heart
    var favourite = document.getElementById('favourite')
    const dHeart = favourite.checked ? heartFilled : heart
    canvas.drawImage(dHeart, 920, 1320, 48, 48)

    // Draw Time Bar
    var current = document.getElementById('time').value
    drawBar(current)

    // Draw Current Time
    var minutes = document.getElementById('minutes').value
    var seconds = document.getElementById('seconds').value
    seconds < 60 && seconds >= 0 ? 0 : document.getElementById('seconds').value = Math.max(Math.min(seconds, 59), 0)
    canvas.font = '40px Arial'
    canvas.fillStyle = '#AAAAAA'
    var cTime = current != 0 ? (minutes * 60 + seconds) * (current / 10000) : 0
    var cm = cTime / 60
    var cs = cTime % 60
    canvas.fillText(`${Math.trunc(cm)}:${cs < 10 ? '0' : ''}${Math.trunc(cs)}`, 96, 1530)

    // Draw Max Time
    canvas.font = '40px Arial'
    canvas.fillStyle = '#AAAAAA'
    canvas.fillText(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`, minutes < 10 ? 890 : 865, 1530)

    // Draw Shuffle
    canvas.drawImage(shuffle, 96, 1670, 48, 48)

    // Draw Previous
    canvas.drawImage(previous, 300, 1666, 56, 56)

    // Draw Play
    const playPause = document.getElementById('play-pause').checked ? pause : play
    canvas.drawImage(playPause, 444, 1604, 192, 192)

    // Draw Next
    canvas.drawImage(next, 724, 1666, 56, 56)

    // Draw Loop
    canvas.drawImage(loop, 920, 1670, 48, 48)

}

render()