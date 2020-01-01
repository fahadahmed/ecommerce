import React from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';

function Checkout() {

  return(
    <React.Fragment>
      <h1>Checkout Page</h1>
      <p>Here we collect the user information and process the payment via Stripe</p>
      <div><Link to="/cart">Back to Cart</Link></div>
      <div><Link to="/home">Back to home page</Link></div>
    </React.Fragment>
  )
}

export default Checkout;