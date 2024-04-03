import express from "express";
import { Router } from "express";
import broadcastController from "../controllers/broadcastController.js";
import channelController from "../controllers/channelController.js";
import authService from "../services/authService.js";
import jwtFilter from '../middleware/jwtFilter.js';

const router = express.Router();

router.get("/api/broadcasts", broadcastController.getAllMessages);
router.post("/api/broadcasts", broadcastController.createMessage);

router.get("/api/channel", channelController.getAllChannels);
router.get("/api/channel/:id", channelController.getAllMessagesInChannel);
router.put("/api/channel");

export default router;