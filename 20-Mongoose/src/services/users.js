const userModel = require('../dao/models/user')

module.exports = class {

    async createUser(user) {
        await userModel.create(user);
    }

    async getUser(id){
        return userModel.findById(id)
    } 

    async getAllUser() {
        return userModel.find()
    }

    async updateUser(id, userUpdated) {
        const userToUpdate = await userModel.findByIdAndUpdate(id, userUpdated, {
            new: true,
        })
        return userToUpdate;
    }

    async deleteUser(id){
        await userModel.findByIdAndDelete(id);
    }
}