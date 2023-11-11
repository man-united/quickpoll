import { MongoClient } from 'mongodb';
import config from './config.js';

const MONGO_URL = config.MONGO_URL;

let db;

const connectToMongoDB = async () => {
  const client = new MongoClient(MONGO_URL, {});

  try {
    await client.connect();
    db = client.db(process.env.MONGO_DB_NAME);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

const getDb = () => {
  if (!db) {
    throw new Error('Database not initialized. Call connectToMongoDB first.');
  }
  return db;
};

export { connectToMongoDB, getDb };
