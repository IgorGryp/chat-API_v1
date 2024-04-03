const express = require("express");
const router = express.Router();
const broadcastController = require("../controllers/broadcastController");
const channelController = require("../controllers/channelController");
const authService = require("../services/authService");

router.get("/api/broadcasts", broadcastController.getAllMessages);
router.post("/api/broadcasts", broadcastController.createMessage);

router.get("/api/channel", channelController.getAllChannels);
router.get("/api/channel/:id", channelController.getAllMessagesInChannel);
router.put("/api/channel");
