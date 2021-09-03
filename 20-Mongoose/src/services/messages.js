const userMessage = require('../dao/models/messages');

module.exports = class {

    async createMessage(user) {
        await userMessage.create(user);
    }

    async getMessage(id){
        return userMessage.findById(id)
    } 

    async getAllMessages() {
        return userMessage.find()
    }

    async updateMessage(id, userUpdated) {
        const userToUpdate = await userMessage.findByIdAndUpdate(id, userUpdated, {
            new: true,
        })
        return userToUpdate;
    }

    async deleteMessage(id){
        await userMessage.findByIdAndDelete(id);
    }
}
