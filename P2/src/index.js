const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log('Example app listening on port 3000')
})

app.get('/about', (req, res) => {
    res.send('Halaman About')
})

app.get('/contact', (req, res) => {
    res.send('Halaman Contact')
})