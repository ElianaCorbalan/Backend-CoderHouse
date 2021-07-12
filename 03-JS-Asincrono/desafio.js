let texto1 = 'primer texto';
let texto2 = 'Que dificil se me haceeee';
let texto3 = 'mantenerme en este viaje del backeeend';
let tiempo = 2000;

function delay(t) {
    return new Promise(function (resolve) {
        setTimeout(resolve, t);
    });
}

const mostrarPalabras = async (texto, tiempo,acumulado, callback) => {
    let cant = texto.split(' ');
    for (i = 0; i < cant.length; i++) {
        console.log(cant[i]);
        await delay(tiempo);
    }
    callback(acumulado + cant.length)
}


mostrarPalabras(texto1, tiempo,0, (totalPalabras) => {
    mostrarPalabras(texto2, tiempo,totalPalabras, (totalPalabras) => {
        mostrarPalabras(texto3, tiempo,totalPalabras, (totalPalabras) => {
            console.log('Proceso terminado, cantidad de palabras:', totalPalabras);
        });
    });
});



