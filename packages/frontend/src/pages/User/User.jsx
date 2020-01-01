import React from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';

function User() {

  return(
    <React.Fragment>
      <h1>User Account Page</h1>
      <Link to="/home">Back to home page</Link>
    </React.Fragment>
  )
}

export default User;