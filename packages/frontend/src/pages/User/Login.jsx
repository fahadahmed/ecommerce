import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return(
    <React.Fragment>
      <div>
      <h1>Login Form</h1>
      <Link to="/register">Register a new account</Link>
      </div>
    </React.Fragment>
  )
}

export default Login;