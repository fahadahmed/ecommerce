import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return(
    <React.Fragment>
      <div>
      <h1>Register Form</h1>
      <Link to="/login">Login</Link>
      </div>
    </React.Fragment>
  )
}

export default Login;