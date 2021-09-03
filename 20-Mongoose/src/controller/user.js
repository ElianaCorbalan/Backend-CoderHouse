const UserService = require('../services/users')
const user = new UserService();

exports.createUser = async (req, res)=>  {
    await user.createUser(req.body);
    res.json({
        msg: 'User created',
    })
}

exports.findAll = async (req, res)=>  {
    const allusers = await user.getAllUser()
    res.json(allusers);
}

exports.updateUser = async (req, res)=>  {
    const { 
        body, 
        params:  { userid },
    } = req;
    const updatedUser = await user.updateUser(userid, body);
    res.json(updatedUser);
}

exports.getOne = async (req, res)=>  {
    const { 
        params: { userid }, 
    } = req;
    const userRetrieved = await user.getUser(userid);
    res.json(userRetrieved);
}

exports.deleteOne = async (req, res)=>  {
    const { 
        params: { userid },
    } = req;
    await user.deleteUser(userid);
    res.json({msg: "ok"});
}