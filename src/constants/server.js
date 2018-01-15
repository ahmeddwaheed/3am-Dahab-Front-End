const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'https://dahab-backend.herokuapp.com/charges'
  : 'http://localhost:3001/charges';

export default PAYMENT_SERVER_URL;