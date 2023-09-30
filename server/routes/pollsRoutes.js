const express = require('express');
const router = express.Router();
const { getDB } = require('../db');

router.get('/', async (req, res) => {
  try {
    const db = getDB();

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

module.exports = router;
