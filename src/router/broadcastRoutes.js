import express from "express";
import broadcastController from '../controller/broadcastController.js';

const router = express.Router();

router.get("/broadcasts", broadcastController.getAllMessages);
router.post("/broadcasts", broadcastController.createMessage);

export default router;