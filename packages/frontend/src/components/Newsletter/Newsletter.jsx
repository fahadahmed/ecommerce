import React, {useState} from 'react';
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

  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, email} = e.target.elements;
    console.log(name.value, email.value);
    const payload = {
      email: email.value,
      firstName: name.value
    }
    fetch('https://us-central1-ecommerce-8c3a8.cloudfunctions.net/addSubscriber', {
      method: 'POST',
      headers: {
        ContentType: 'application/json',
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      console.log(JSON.parse(response));
    })
    document.getElementById("newsletter").reset();
  }

  return(
    <Form onSubmit={handleSubmit} id="newsletter">
      <Input type="text" placeholder="Your name" name="name" required />
      <Input type="text" placeholder="Your email" name="email" required />
      <Button>Subscribe</Button>
    </Form>
  )
}

export default Newsletter;