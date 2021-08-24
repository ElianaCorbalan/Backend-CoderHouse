const db = require('../config/db')

module.exports = class MessageRepository {
    async createMsg({ author, text, date }) {
        try {
            await db('messages').insert({
                name: author,
                message: text,
                date: date
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    async selectMsg() {
        try {
            return await db('messages').select();
        }
        catch (error) {
            console.log(error)
        }
    }

    async delete(id) {
        try {
            await db('messages').where({ id: id }).del()
        }
        catch (error) {
            console.log(error)
        }
    }

    async update({ email, mensaje }, id) {
        try {
            await db('messages').where({ id: id }).update({
                email: email,
                mensaje: mensaje
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}