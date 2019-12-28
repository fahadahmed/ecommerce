import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';

function Newsletter(props) {

  const Form = styled.form`
    display: grid;
  `;

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
  `;
  const Button = styled.button`
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
  `;

  return(
    <Form>
      <Input type="text" placeholder="Your name" />
      <Input type="text" placeholder="Your email" />
      <Button>Subscribe</Button>
    </Form>
  )
}

export default Newsletter;