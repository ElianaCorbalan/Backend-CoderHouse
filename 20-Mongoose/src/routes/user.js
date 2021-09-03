
const userController = require("../controller/user");

module.exports = (router) => {
    router
        .post("/user/create", userController.createUser)
        .get("/user/:userid", userController.getOne)
        .get("/user", userController.findAll)
        .patch("/user/:userid", userController.updateUser)
        .delete("/user/:userid", userController.deleteOne)

    return router;
};