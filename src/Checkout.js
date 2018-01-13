import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import STRIPE_PUBLISHABLE from './constants/stripe';
import PAYMENT_SERVER_URL from './constants/server';
import Modal from './Modal.js';


const CURRENCY = 'EGP';

const fromEgpToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description, user_id, pool_id) => token => {
  return axios.post(PAYMENT_SERVER_URL,
    {
      description,
      stripeToken: token.id,
      currency: CURRENCY,
      amount: amount,
      user_id: user_id,
      pool_id: pool_id
    })
    .then(successPayment)
    .catch(errorPayment);
  }

const Checkout = ({ name, description, amount, user_id, pool_id}) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={fromEgpToCent(amount)}
    token={onToken(amount, description, user_id, pool_id)}
    currency={CURRENCY}
    stripeKey={'pk_test_DTW2OZE8qupG5zaPuWV02kpK'}
  />

export default Checkout;



