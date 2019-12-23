import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import { AuthProvider } from '../components/AuthProvider/Auth.jsx';
import PrivateRoute from '../components/AuthProvider/PrivateRoute.jsx';

import Products from './Products/Products.jsx';
import Customers from './Customers/Customers.jsx';
import Orders from './Orders/Orders.jsx';
import Login from './Login/Login.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';

function Routes() {

  return(
    <React.Fragment>
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Redirect from="/" to="/login" />
          </Switch>
        </Router>
      </AuthProvider>
    </React.Fragment>
  )
}

export default Routes;