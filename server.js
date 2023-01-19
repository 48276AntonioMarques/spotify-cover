'use strict'
import express from 'express'
import fs from 'fs'
const port = 3001
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

async function count(req, res, next) {
    const count = fs.readFileSync('./count.txt')
    console.log(count.toString())
    fs.writeFileSync('./count.txt', (1 + parseInt(count.toString(), 10)).toString())
    next()
}

app.use('/render.js', count)
app.use('/', express.static('./public'))
app.listen(port)