// inicializamos la conexion
const socket = io.connect();

var template = Handlebars.compile(`
{{#each productos}}
<tr >
    <th> {{ this.id }} </th>
    <th> {{ this.title }} </th>
    <th> {{ this.price }} </th>
    <th><img width="40" height="40" src={{ this.thumbnail }}></th>
</tr>
{{/each}}
`)

socket.on('productos', data => {
    console.log("todos" + JSON.stringify(data))
    $("#innerBody").html(template({ productos: data.productos}))
})
const $bodyData = document.getElementById('innerBody')
const $titleData = document.getElementById('title')
const $priceData = document.getElementById('price')
const $thumbnailData = document.getElementById('thumbnail')
const $btnId = document.getElementById('btnId')

const enviarMensaje = () => {
    console.log("ejecutando mensaje")
    const data = {
        title: $titleData.value,
        price: $priceData.value,
        thumbnail: $thumbnailData.value
    }
    socket.emit('producto', data);
}

if($btnId) $btnId.addEventListener('click', enviarMensaje);