import express from 'express';
import { getDb } from '../db.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const db = getDb();

    const poll = await db.collection('polls').findOne({});

    if (!poll) {
      return res.status(404).json({ message: 'Poll not found' });
    }

    res.json(poll);
  } catch (error) {
    console.error('Error retrieving poll:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
