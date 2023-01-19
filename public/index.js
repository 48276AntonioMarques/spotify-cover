'use strict'
const bgOptions = document.querySelectorAll('.background')

function showBgOption(name) {
    bgOptions.forEach((div) => {
        !div.classList.contains(name) ? div.classList.add('hidden') : div.classList.remove('hidden')
    })
}

// Set default
showBgOption('gradient')

document.querySelectorAll('input[type=range]').forEach((slider) => {
    slider.addEventListener('wheel', (e) => {
        e.deltaY < 0 ? slider.valueAsNumber += 1 : slider.value -= 1
        render()
        e.preventDefault()
        e.stopPropagation()
    })
})

document.querySelectorAll('input[type=radio]').forEach((background) => {
    background.addEventListener('click', (e) => {
        showBgOption(e.target.value)
    })
})

// Image updloadings
const bgi = document.getElementById('bg-image')
const bgReader = new FileReader()
const bgImage = new Image

bgi.addEventListener('change', (e) => {
    const selectedFile = bgi.files[0]
    if (selectedFile) {
        bgReader.addEventListener('load', () => { bgImage.src = bgReader.result })
        bgReader.readAsDataURL(selectedFile)
    }
})

const cvi = document.getElementById('cv-image')
const cvReader = new FileReader()
const cvImage = new Image

cvi.addEventListener('change', (e) => {
    const selectedFile = cvi.files[0]
    if (selectedFile) {
        cvReader.addEventListener('load', () => { cvImage.src = cvReader.result })
        cvReader.readAsDataURL(selectedFile)
    }
})
