import express from "express";
import channelController from '../controller/channelController.js';
import authService from '../service/authService.js';

const router = express.Router();

router.get("/channel", channelController.getAllChannels);
router.get("/channel/:id", channelController.getAllMessagesInChannel);
router.put("/channel", channelController.createChannel);
router.post("/channel/:id", channelController.createMessageInChannel);
router.delete("/channel/:id", channelController.deleteChannel);

export default router;
