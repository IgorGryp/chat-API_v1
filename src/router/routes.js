const express = require("express");
const router = express.Router();
const broadcastRoutes = require("./broadcastRoutes");
const channelRoutes = require("./channelRoutes");

router.use("/api", broadcastRoutes);
router.use("/api", channelRoutes);

export default router;
