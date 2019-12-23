import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import SideNav from '../SideNav/SideNav.jsx';
import NavItem from "../NavItem/NavItem.jsx";

function ContentContainer(props) {
  const Container = styled.div`
    display: grid;
    grid-template-columns: 250px 1fr;
    height: 100%;
    padding: 16px;
  `
  return(
    <Container>
      <SideNav>
        <NavItem url="/dashboard" title="Dashboard" />
        <NavItem url="/products" title="Products" />
        <NavItem url="/orders" title="Orders" />
        <NavItem url="/customers" title="Customers" />
          
      </SideNav>
      {props.children}
    </Container>
  )
}

export default ContentContainer;