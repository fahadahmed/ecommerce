import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

function ContentContainer(props) {
  const Container = styled.div`
    display: grid;
    grid-template-columns: 250px 1fr;
    height: 100%;
  `
  return(
    <Container>
      <div>
        <div><Link to="/dashboard">Dashboard</Link></div>
        <div><Link to="/products">Products</Link></div>
        <div><Link to="/customers">Customers</Link></div>
        <div><Link to="/orders">Orders</Link></div>
      </div>
      {props.children}
    </Container>
  )
}

export default ContentContainer;