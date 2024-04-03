const broadcastController = {};

broadcastController.getAllMessages = (req, res) => {
    res.send("Get all messages");
};

broadcastController.createMessage = (req, res) => {
    res.send("Create a message");
};

export default broadcastController;
