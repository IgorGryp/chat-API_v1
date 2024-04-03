const express = require("express");
const router = express.Router();
const channelController = require("../controllers/channelController");
const authService = require("../services/authService");

router.get("/channel", channelController.getAllChannels);
router.get("/channel/:id", channelController.getAllMessagesInChannel);
router.put("/channel", authService.authenticateToken, channelController.createChannel);
router.post("/channel/:id", authService.authenticateToken, channelController.createMessageInChannel);
router.delete("/channel/:id", authService.authenticateToken, channelController.deleteChannel);

export default router;
