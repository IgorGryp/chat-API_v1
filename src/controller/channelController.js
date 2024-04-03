const channelController = {};

channelController.getAllChannels = (req, res) => {
    res.send("Get all channels");
};

channelController.getAllMessagesInChannel = (req, res) => {
    res.send("Get all messages in channel");
};

export default channelController;
