import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Products from './Products/Products.jsx';
import Customers from './Customers/Customers.jsx';
import Orders from './Orders/Orders.jsx';
import Login from './Login/Login.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';

function Routes() {

  return(
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Redirect from="/" to="/login" />
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default Routes;