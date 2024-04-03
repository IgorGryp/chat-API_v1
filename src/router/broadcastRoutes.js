const express = require("express");
const router = express.Router();
const broadcastController = require("../controllers/broadcastController");

router.get("/broadcasts", broadcastController.getAllMessages);
router.post("/broadcasts", broadcastController.createMessage);

export default router;
