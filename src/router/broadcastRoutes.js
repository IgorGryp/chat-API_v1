//  * This module defines routes for broadcasting messages

import express from 'express';
import broadcastController from '../controller/broadcastController.js';

const router = express.Router();

// Broadcasting-related routes delegates the actual handling of requests to corresponding functions in the broadcastController
router.get('/broadcast', broadcastController.getAllMessages); // GET requests to retrieve all messages
router.post('/broadcast', broadcastController.createMessage); // POST requests to create new messages

export default router;
