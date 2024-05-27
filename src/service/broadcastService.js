//  * Service module responsible for handling operations related to broadcasting messages

import { fetchCollection } from '../mongodb/mongoDbClient.js'; // function from the MongoDB client module to interact with the database

const BROADCAST_CHANNEL_NAME = 'broadcast'; // define the name of the broadcast channel

const broadcastService = {}; // object to hold service functions

// Function to retrieve all messages from the broadcast channel
broadcastService.getAllMessages = async () => {
  const channelsCollection = fetchCollection('channels'); // fetches the channels collection from the database
  // Finds the broadcast channel document in the channels collection
  const broadcastChannel = await channelsCollection.findOne({
    channelName: BROADCAST_CHANNEL_NAME,
  });
  if (!broadcastChannel) {
    throw new Error('Broadcast channel not found');
  }
  return broadcastChannel.messages; // returns the messages stored in the broadcast channel document
};

// Function to create a new message in the broadcast channel
broadcastService.createMessage = async (newMessage) => {
  const channelsCollection = fetchCollection('channels'); // fetches the channels collection from the database
  // Updates the broadcast channel document by pushing the new message into the messages array
  const result = await channelsCollection.updateOne(
    { channelName: BROADCAST_CHANNEL_NAME }, // filter to find the broadcast channel document
    { $push: { messages: newMessage } } // pushes the new message
  );
  // If no documents were modified during the update operation, throw an error
  if (result.modifiedCount === 0) {
    throw new Error('Failed to create message in broadcast channel');
  }
  return newMessage; // returns the new message after successfully creating it in the broadcast channel
};

export default broadcastService; // exports the broadcast service object
