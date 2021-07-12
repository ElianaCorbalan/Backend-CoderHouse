const express = require("express")
var moment = require('moment');

const app = express()

let contar = 0;

app.get('/', (req, res) => {
    let mensaje = `
    <html>
    <body>
    <style>h1{color: blue;}</style>
    <h1>Bienvenidos al servidor express</h1>
    </body>
    </html>`
    res.send(mensaje)
})

app.get('/visitas', (req, res) => {
    res.send(`La cantidad de visitas es ${contar}`)
    contar++
})

app.get('/fyh', (req, res) => {
    res.send(`La fecha y hora ${moment().format('DD-MM-YYYY H:MM:SS')}`)
})

app.listen(8080, () => console.log(`Nuestro servidor corriendo`));
