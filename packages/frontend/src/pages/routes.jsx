import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Layout from '../layout/Layout.jsx';

import Home from './Home/Home.jsx';
import User from './User/User.jsx';
import Cart from './Cart/Cart.jsx';
import Checkout from './Checkout/Checkout.jsx';
import Login from './User/Login.jsx';
import Register from './User/Register.jsx';

function Routes() {

  return(
    <React.Fragment>
      <Router>
        <Layout>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/user" component={User} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Redirect from="/" to="/home" />
          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  )
}

export default Routes;