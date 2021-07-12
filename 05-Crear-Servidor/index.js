const http = require('http');

const server = http.createServer((peticion, respuesta) => {
    var productos = {
        id: Math.floor(Math.random()*(0, 10)+1),
        title: "Producto " + Math.floor((Math.random()*(0, 10)+1)),
        price: (Math.random()*(0, 9999.99)).toFixed(2),
        thumbnail: "Foto " + Math.floor(Math.random()*(0, 10)+1)
        };
        
        respuesta.end(JSON.stringify(productos));
});

server.listen(3000, function () {
    console.log(`Servidor escuchando en http://localhost:${this.address().port}`);
});

