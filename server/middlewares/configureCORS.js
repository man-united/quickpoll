import cors from 'cors';

const allowedOrigins = ['http://localhost:3000'];

const corsOptions = {
  origin: allowedOrigins,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

const configureCORS = () => {
  return cors(corsOptions);
};

export default configureCORS;
