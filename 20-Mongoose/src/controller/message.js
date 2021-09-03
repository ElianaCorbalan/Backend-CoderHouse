const MessageService = require('../services/messages')
const message = new MessageService();

exports.createMessage = async (req, res)=>  {
    await user.createMessage(req.body);
    res.json({
        msg: 'send message',
    })
}

exports.findAllMessage = async (req, res)=>  {
    const allmessages = await user.getAllMessages()
    res.json(allmessages);
}

exports.updateMessage = async (req, res)=>  {
    const { 
        body, 
        params:  { messageid },
    } = req;
    const updatedMessage = await user.updateUser(messageid, body);
    res.json(updatedMessage);
}

exports.deleteMessage = async (req, res)=>  {
    const { 
        params: { messageid },
    } = req;
    await user.deleteUMessage(messageid);
    res.json({msg: "ok"});
}