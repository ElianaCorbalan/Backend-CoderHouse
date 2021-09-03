const messageController = require("../controller/message");

module.exports = (router) => {
    router
        .post("/messages", messageController.createMessage)
        .get("/messages", messageController.findAllMessage)
        .patch("/messages/:id", messageController.updateMessage)
        .delete("/messages/:id", messageController.deleteMessage)

    return router;
};