const express=require('express');
const app=express();

const puerto = 8080;
let producto=require('./productos');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(__dirname + '/public'));
let router = express.Router();
app.use('/', router)


// Motor de plantilla
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');



app.get('/',(req,res)=>{
    res.render('index')
});

//Mostrar productos
app.get('/productos',(req,res)=>{
    res.render('productos', {productos: producto.listaProductos})
});

// listar por ID
router.get('/productos/:id', (req, res) => {
    res.render('productos', { productos: producto.buscarId(req.params.id)})
});


// incorporar una nuevo producto
router.post('/productos', (req, res) => {
    producto.nuevoProducto(req.body)
    res.render('productos',{productos: producto.listaProductos})
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