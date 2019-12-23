import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './Home/Home.jsx';
import Products from './Products/Products.jsx';

function Routes() {

  return(
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/products" component={Products} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default Routes;