//  * This module is responsible for handling requests related to broadcasting messages in the application

import broadcastService from '../service/broadcastService.js';

const broadcastController = {}; // empty object to hold controller functions

// Controller function to handle GET requests to retrieve all messages
broadcastController.getAllMessages = async (req, res) => {
  try {
    const messages = await broadcastService.getAllMessages(); // fetch all messages from the service
    res.json(messages); // sends a JSON response with the retrieved messages
  } catch (error) {
    console.error('Error fetching messages in broadcast channel:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function to handle POST requests to create a new message
broadcastController.createMessage = async (req, res) => {
  try {
    const newMessage = req.body; // extracts the new message data from the request body
    const createdMessage = await broadcastService.createMessage(newMessage); // creates the new message
    res.status(201).json(createdMessage);
  } catch (error) {
    console.error('Error creating message in broadcast channel:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default broadcastController;

/* This broadcastController module serves as an intermediary between the routing layer (which receives incoming HTTP 
   requests) and the service layer (which contains business logic and interacts with the data layer). It delegates 
   the handling of broadcasting-related requests to corresponding functions in the broadcastService, handling any errors 
   that may occur during the process.
*/
