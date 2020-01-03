import React, {useState} from 'react';
import styled from '@emotion/styled';
import fire from '../../config/fire';

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

  const Message = styled.div`
    margin-top: 8px;
    border: 2px solid #3cae3c;
    color: #FFF;
    background: #3cae3c;
    padding: 8px;
    font-family: "Roboto Slab";
  `;

  const [message, setMessage] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [subscriberEmail, setSubscriberEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, email} = e.target.elements;
    const dbRef = fire.firestore();
    dbRef.collection("subscribers").add({
      email: name.value,
      firstName: email.value
    })
    .then(docRef => {
      console.log("New Document written with ID:", docRef.id);
    })
    .catch(err => {
      console.error("error adding document:", err);
    })
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
      response.json().then(data => ({
        data: data,
        status: response.status
      })).then(res => {
        console.log(res);
        setMessage(res.data.message);
      })
    })
    .catch(err => {
      console.error("error adding user to the mailchimp list:", err);
    })
    document.getElementById("newsletter").reset();
  }

  return(
    <Form onSubmit={handleSubmit} id="newsletter">
      <Input type="text" placeholder="Your name" name="name" required />
      <Input type="text" placeholder="Your email" name="email" required />
      <Button>Subscribe</Button>
      {message && 
        <Message>{message}</Message>
      }
    </Form>
  )
}

export default Newsletter;