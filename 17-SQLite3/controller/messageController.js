const MessageService = require('../services/MenssageService');

const messageService = new MessageService()

class Mensaje {
    mensaje = [];

    async nuevoMsj(mensaje) {
        await messageService.createMsg(mensaje);
    }

    listarMensajes() {
        messageService.selectMsg().then(val => this.mensaje = val)
        return this.mensaje;
    }

    async actualizarMensaje(cambios, id) {
        await messageService.update(cambios, id)
    }

    async eliminarMensaje(id) {
        await messageService.delete(id)
    }
}

module.exports = new Mensaje