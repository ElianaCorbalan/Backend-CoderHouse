var express = require('express');
var app = express();
var server = require('http').Server(app);
//libreria para las fechas y horarios
var moment = require('moment');
// le pasamos la constante http a socket.io
var io = require('socket.io')(server);
var producto = require('./productos');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + '/public'));
var messages = [];
// Motor de plantilla
var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) { });
app.set('view engine', 'hbs');
app.get('/', function (req, res) {
    res.render('index');
});
//cuando se realice la conexion, se ejecutara una sola vez
io.on('connection', function (socket) {
    console.log('usuario conectado');
    //lista de productos en la tabla
    socket.on('producto', function (data) { return producto.nuevoProducto(data); });
    io.sockets.emit('productos', { productos: producto.listaProductos });
    //canal de chat
    socket.emit('messages', messages);
    socket.on('new-message', function (dato) {
        dato.date = moment().format('LLLL');
        messages.push(dato);
        io.sockets.emit('messages', messages);
    });
});
server.listen(3000, function () {
    console.log('Servidor escuchando en http://localhost:3000');
});
