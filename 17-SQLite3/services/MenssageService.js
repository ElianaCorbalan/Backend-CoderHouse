const MessageRepository = require('../repository/messageRepository')

const messageRepository = new MessageRepository()

module.exports = class MessageService {

    async createMsg(message){     
        return messageRepository.createMsg(message)        
    }

    async selectMsg(){
        try {
            return messageRepository.selectMsg()
        } catch (error) {
            console.log(error)
        }
    }

    async delete(id){
        await messageRepository.delete(id)
    }

    async update(changes, id){
        await messageRepository.update(changes, id)
    }
}