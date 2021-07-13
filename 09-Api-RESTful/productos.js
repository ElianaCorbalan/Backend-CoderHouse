class Producto{
    productos=[
        {
            "title": "Lapicera",
            "price": 20,
            "thumbnail": "https://foo.png",
            "id": 0
        },
        {
            "title": "Colores",
            "price": 300,
            "thumbnail": "https://foo.png",
            "id": 1
        },
        {
            "title": "Corrector",
            "price": 100,
            "thumbnail": "https://foo.png",
            "id": 2
        }
    ];

    idProducto = 2;
    nuevoProducto(producto){
        this.productos.push({
            title: producto.title,
            price: producto.price,
            thumbnail: producto.thumbnail,
            id:++this.idProducto
        });
        return(this.idProducto);
    }

    buscarId(id){
        if (this.productos[id]==undefined){
            return {error:"Producto no encontrado"}
        }
        return this.productos[id];
    }

    editarProducto(item){
        this.productos[item.id] = item
        return(item.id);
    }

    borrarProducto(id){
        this.productos = this.productos.filter((producto) => producto.id != id);
    }


    get listaProductos(){
        if (this.productos.length==0){
            return {error:"Error, no hay productos cargados"}
        }
        return this.productos;
    }
}

module.exports= new Producto;