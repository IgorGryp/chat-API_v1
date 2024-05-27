// * Sets up Express.js server with middleware and routes

import express from 'express'; // Imports Express framework
import cors from 'cors'; // Imports CORS middleware
import { fetchCollection } from './src/mongodb/mongoDbClient.js'; // Imports custom function to fetch database collection

import authRoutes from './src/router/authRoutes.js'; // Imports routes related to authentication
import broadcastRoutes from './src/router/broadcastRoutes.js'; // Imports routes related to broadcasting
import channelRoutes from './src/router/channelRoutes.js'; // Imports routes related to channels

const app = express(); // Creates an Express application
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
// Routes for different parts of the application
app.use('/', authRoutes);
app.use('/', broadcastRoutes);
app.use('/', channelRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
