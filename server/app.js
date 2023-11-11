import express from 'express';

import { connectToMongoDB } from './db.js';
import { configureCORS } from './middlewares/index.js';
import pollRoutes from './routes/pollsRoutes.js';
import config from './config.js';

const app = express();
const PORT = config.PORT;

app.use(configureCORS());
app.use(express.json());

app.use('/polls', pollRoutes);

const startServer = async () => {
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
};

startServer();
