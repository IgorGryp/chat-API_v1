// * Sets up Express.js server with middleware and routes

import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { fetchCollection } from './src/mongodb/mongoDbClient.js'; // Imports custom function to fetch database collection
import authRoutes from './src/router/authRoutes.js';
import broadcastRoutes from './src/router/broadcastRoutes.js';
import channelRoutes from './src/router/channelRoutes.js';

const app = express(); // Creates an Express application
const server = http.createServer(app); // Creates HTTP server
const io = new Server(server); // Attaches Socket.IO to the server
const port = process.env.PORT || 3000; // The port for the server to listen on is in environment variables or 3000 by default

/* Config */
app.use(cors()); // Enables CORS middleware with default options, allowing this server to respond to requests from any origins and with any headers
app.use(express.json()); // Enables JSON parsing middleware to parse incoming request bodies in JSON format into a JavaScript object, making it available in req.body property of the request object
/* Database */
// Custom middleware function that makes the database available to all router files
app.use((req, res, next) => {
  req.db = fetchCollection(); // Adds the database connection to the request object and makes it available to the entire application
  next(); // Calls the next middleware function. This ensures that subsequent middleware functions and route handlers have access to req.db
});
/* Routes */
app.use('/', authRoutes);
app.use('/', broadcastRoutes);
app.use('/', channelRoutes);

// Track connected users and their statuses
let onlineUsers = {};

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Handle user registration
  socket.on('register', (username) => {
    socket.username = username;
    onlineUsers[username] = socket.id;
    io.emit('updateUserStatus', onlineUsers);
  });

  // Handle user setting their status
  socket.on('setStatus', (status) => {
    onlineUsers[socket.id] = { status };
    io.emit('updateUserStatus', onlineUsers); // Broadcast updated status to all clients
  });

  // Handle user disconnection
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
    delete onlineUsers[socket.id];
    io.emit('updateUserStatus', onlineUsers); // Broadcast updated status to all clients
  });
});
// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
