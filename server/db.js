const { MongoClient } = require('mongodb');

let mongoURL = process.env.MONGO_URL;

let db;

async function connectToMongoDB() {
  const client = new MongoClient(mongoURL, {});

  try {
    await client.connect();
    db = client.db(process.env.MONGO_DB_NAME);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

function getDB() {
  if (!db) {
    throw new Error('Database not initialized. Call connectToMongoDB first.');
  }
  return db;
}

module.exports = { connectToMongoDB, getDB };
