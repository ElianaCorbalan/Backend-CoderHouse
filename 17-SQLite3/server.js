const express = require('express');
const app = express();
const server = require('http').Server(app);
const menssageController = require('./controller/MessageController');

const cors = require('cors')


//libreria para las fechas y horarios
const moment = require('moment');

// le pasamos la constante http a socket.io
const io = require('socket.io')(server);

let producto = require('./productos');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static(__dirname + '/public'));

app.use(cors());


// Motor de plantilla
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) { });
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index')
});

//cuando se realice la conexion, se ejecutara una sola vez
io.on('connection', socket => {
    console.log('usuario conectado');

    //lista de productos en la tabla
    socket.on('producto', data => producto.nuevoProducto(data));
    io.sockets.emit('productos', { productos: producto.listaProductos });

    //canal de chat

    //get
    socket.emit('messages', menssageController.listarMensajes());

    //insert and get
    socket.on('new-message', function (dato) {
        dato.date = moment().format("YYYY-MM-DD HH:mm:ss");
        menssageController.nuevoMsj(dato).then(() => {io.sockets.emit('messages', menssageController.listarMensajes())});
    });
})


server.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});
