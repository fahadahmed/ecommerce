import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './Home/Home.jsx';
import User from './User/User.jsx';
import Cart from './Cart/Cart.jsx';
import Checkout from './Checkout/Checkout.jsx';

function Routes() {

  return(
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default Routes;