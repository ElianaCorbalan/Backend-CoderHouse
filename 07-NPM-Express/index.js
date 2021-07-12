const fs = require("fs")
const express = require('express');

const app = express();
const puerto = 8080;

let data = fs.readFileSync('./productos.txt')
let productos = JSON.parse(data)
let cantidad = JSON.parse(data).length

//Inicializo contador de visitas
let contador1 = 0
let contador2 = 0

//Defino las rutas
app.get('/', (req, res) => {
    let mensaje = `
    <html>
    <body>
    <style>h1{color: red;}</style>
    <h1>Servidor express de Eli </h1>
    </body>
    </html>`
    res.send(mensaje)
})

app.get('/items', (req, res) => {
    let respuesta = {items: [productos], cantidad: (cantidad)}
    res.send(respuesta)
    contador1++
});

app.get('/items-random', (req, res) => {
    let respuesta = productos[Math.floor(Math.random()*productos.length)]
    res.send(respuesta)
    contador2++
});

app.get('/visitas', (req, res) => {
    res.send(`La cantidad de visitas en ruta1:${contador1}\nLa cantidad de visitas en ruta2:  ${contador2}`)
})

// pongo a escuchar el servidor en el puerto indicado
const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});
// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});

