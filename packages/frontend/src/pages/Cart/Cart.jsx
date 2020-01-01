import React from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';

function Cart() {

  return(
    <React.Fragment>
      <h1>Shopping Cart</h1>
      <div><Link to="/checkout">Proceed to Checkout</Link></div>
      <div><Link to="/home">Back to home page</Link></div>
    </React.Fragment>
  )
}

export default Cart;