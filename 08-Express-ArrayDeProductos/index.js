const express = require('express');
let producto=require('./productos');
// creo una app de tipo express
const app = express();
const puerto = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// listar
app.get('/api/productos',(req,res)=>{
    res.send(producto.listaProductos)
})

// listar por ID
app.get('/api/productos/:id', (req, res) => {
    res.send(producto.buscarId(req.params.id))
});

// incorporar una nuevo producto
app.post('/api/productos', (req, res) => {
    let id = producto.nuevoProducto(req.body)
    res.send(producto.buscarId(id))
});

// pongo a escuchar el servidor en el puerto indicado
const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});
