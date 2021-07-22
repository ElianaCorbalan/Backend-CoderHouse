const express=require('express');
const puerto = 8080;
const app=express();

app.use('/static', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.engine('ejs', require('ejs').__express)
// Se indica el directorio donde se almacenarán las plantillas 
app.set('views', './views');
// Se indica el motor del plantillas a utilizar
app.set('view engine','ejs');

let producto=require('./productos');
let router = express.Router();
app.use('/', router)


app.get('/',(req,res)=>{
    res.render('index', {productos: []})
});


// incorporar una nuevo producto
router.post('/productos', (req, res) => {
    producto.nuevoProducto(req.body)
    res.render('index',{productos: producto.listaProductos})
});


// pongo a escuchar el servidor en el puerto indicado
const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});
