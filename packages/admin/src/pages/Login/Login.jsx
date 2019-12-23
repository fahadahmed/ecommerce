import React, {useState, useContext} from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import styled from '@emotion/styled';

import fire from '../../config/fire';
import { AuthContext } from '../../components/AuthProvider/Auth.jsx';
import Error from '../../components/Error/Error.jsx';

function Login({history}) {
  const LoginContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    width: 100%;
    height: 100vh;
    justify-items: center;
    align-items: center;
  `
  const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
  `
  const Input = styled.input`
    font-family: 'Roboto Slab', serif;
    font-size: 18px;
    border: 2px solid #fff;
    border-bottom: 2px solid #000;
    margin-bottom: 20px;
    padding: 10px;

    &:focus {
      border: 2px solid #000;
      outline: none;
    }
  `
  const LoginButton = styled.button`
    border: 2px solid #000;
    background: #000;
    color: #fff;
    padding: 10px;
    font-family: 'Roboto Slab', serif;
    font-size: 18px;

    &:hover {
      background: #fff;
      color: #000;
    }
  `
  const Image = styled.img`
    margin-bottom: 20px;
    height: 150px;
  `

  const [error, setError] = useState(null);

  const handleLogin = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const lgn = fire.auth().signInWithEmailAndPassword(email.value, password.value)
    .catch(err => {
      console.log(err);
      setError(err.message);
    })
  }

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/dashboard" />
  }

  return(
    <React.Fragment>
      <LoginContainer>
        <LoginForm onSubmit={handleLogin}>
          <Input type="email" placeholder="email address" name="email" required />
          <Input type="password" placeholder="password" name="password" required />
          <LoginButton type="submit">Login</LoginButton>
          {error !== null && <Error>Error: {error}</Error>}
        </LoginForm>
      </LoginContainer>
    </React.Fragment>
  )
}

export default (withRouter(Login));