import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import STRIPE_PUBLISHABLE from './constants/stripe';
import PAYMENT_SERVER_URL from './constants/server';


const CURRENCY = 'EGP';

const fromEgpToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      stripeToken: token.id,
      currency: CURRENCY,
      amount: amount
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount}) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={fromEgpToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={'pk_test_DTW2OZE8qupG5zaPuWV02kpK'}
  />

export default Checkout;