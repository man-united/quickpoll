const SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:8000';

const config = {
  SERVER_URL: SERVER_URL,
  POLLS_API_URL: SERVER_URL + '/polls',
};

export default config;
