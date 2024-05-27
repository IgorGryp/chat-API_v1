//  * Establishes a connection to MongoDB
//  * Constructs the connection URL for the MongoDB cluster

import { MongoClient } from 'mongodb'; // client to establish a connection to the MongoDB database server
import { dbDetails } from '../config/config.js';

let db; // variable to hold the database connection

// Defines the MongoDB connection URL using the provided username and password
const url = (username, password) => {
  return `mongodb+srv://${username}:${password}@test-cluster0.hxnsnlh.mongodb.net/?retryWrites=true&w=majority&appName=test-Cluster0`;
};

// Fetches a specific collection from the database
export function fetchCollection(name) {
  return fetchDatabase().collection(name); // Accessing the database and returning the requested collection
}

// Fetches the database
function fetchDatabase() {
  // If the database connection already exists, return it
  if (db != undefined) {
    return db;
  }
  // If the database connection doesn't exist, create a new MongoClient to establish a connection
  const client = new MongoClient(url(dbDetails.username, dbDetails.password));

  db = client.db('chat-api-v1'); // connects to the MongoDB cluster and selects the specified database and stores the connected database object
  return db; // return the connected database
}
