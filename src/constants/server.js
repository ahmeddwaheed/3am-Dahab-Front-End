const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3001/charges'
  : 'http://localhost:3001/charges';

export default PAYMENT_SERVER_URL;