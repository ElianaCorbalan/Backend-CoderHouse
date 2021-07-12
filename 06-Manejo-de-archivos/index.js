const fs = require("fs")

class Archivo {
    constructor(name) {
        this.name = name
    }
    async leer(){
        try {
            const data = await fs.promises.readFile(`./${this.name}`, 'utf-8');
            console.log(data);
            return JSON.parse(data);
        } catch(error) {
            return [];
        }
    }
    async guardar(productoNuevo) {
            const data = await this.leer()
            productoNuevo.id = data.length +1;  // Incorporar un id al producto; se obtendrá de la longitud total del array actual más 1.
            data.push(productoNuevo)
            try {
                await fs.promises.writeFile(this.name, JSON.stringify(data, null, "\t"));
                
            } catch (error) {
                console.log('Error, este archivo no se pudo guardar', error)
            }
    }
    async borrar() {
        try {
            await fs.promises.unlink(`./${this.name}`)
        } catch (error) {
            console.log("No se pudo borrar el archivo", error)
        }
    }
}


class Producto {
    constructor(title, price, thumbnail) {
        this.title = title,
        this.price = price,
        this.thumbnail = thumbnail
    }
}

const AgregarItems = async () => {
    const item1 = new Producto('Calculadora', 234.56, 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png')
    const item2 = new Producto('Globo Terráqueo', 345.67, 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png')
    const archivo = new Archivo('productos.txt')

    //await archivo.borrar()
    await archivo.guardar(item1);
    await archivo.guardar(item2);
    await archivo.leer(archivo);
}
//Prueba
AgregarItems()
