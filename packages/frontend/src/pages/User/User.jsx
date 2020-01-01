import React from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';

function User() {

  return(
    <React.Fragment>
      <div>
      <h1 style={{fontFamily: "Roboto Slab"}}>User Account Page</h1>
      <div style={{marginBottom: "16px"}}>
        <Link to="/login" style={{padding:"8px", background: "#000", color: "#fff", textDecoration: "none", fontFamily: "Roboto Slab", marginRight: "16px"}}>Login</Link>
        <Link to="/register" style={{padding:"8px", background: "#000", color: "#fff", textDecoration: "none", fontFamily: "Roboto Slab", marginRight: "16px"}}>Register</Link>
      </div>
      <Link to="/home">Back to home page</Link>
      </div>
    </React.Fragment>
  )
}

export default User;