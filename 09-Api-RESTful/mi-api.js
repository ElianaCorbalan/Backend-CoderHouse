const express = require('express');
const productos = require('./productos');
let producto=require('./productos');
// creo una app de tipo express
const app = express();
const puerto = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(__dirname + '/public'))
let router = express.Router()
app.use('/api', router)

// listar
router.get('/productos',(req,res)=>{
    res.send(producto.listaProductos)
})

// listar por ID
router.get('/productos/:id', (req, res) => {
    res.send(producto.buscarId(req.params.id))
});

// incorporar una nuevo producto
router.post('/productos', (req, res) => {
    let id = producto.nuevoProducto(req.body)
    res.send(producto.buscarId(id))
});

// Editar/ Actualizar
router.put('/productos', (req, res) => {
    let id = producto.editarProducto(req.body)
    res.send(producto.buscarId(id))
});

// Borrar
router.delete('/productos/:id', (req, res) => {
    producto.borrarProducto(req.params.id)
    res.send(`Producto eliminado`)
});

// pongo a escuchar el servidor en el puerto indicado
const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});