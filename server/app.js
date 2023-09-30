const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectToMongoDB } = require('./db');
const pollRoutes = require('./routes/pollsRoutes');

const app = express();
const PORT = process.env.PORT || 8000;

const allowedOrigins = ['http://client:3000'];

const corsOptions = {
  origin: allowedOrigins,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`Received ${req.method} request at ${req.url}`);
  next();
});

app.use('/polls', pollRoutes);

async function startServer() {
  try {
    await connectToMongoDB();

    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });

    app.get('/', (req, res) => {
      res.json({ message: 'message from server' });
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

startServer();
