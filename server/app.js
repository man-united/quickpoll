const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Message from the server' });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
