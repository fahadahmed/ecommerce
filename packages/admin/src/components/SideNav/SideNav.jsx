import React from 'react';
import styled from '@emotion/styled';

function SideNav(props) {
  
  const Nav = styled.div`
    background: #fff;
    box-shadow: 2px 2px 4px 0px rgba(204,204, 204, 1);
    margin-right: 8px;
  `;

  return(
    <Nav>{props.children}</Nav>
  )
}

export default SideNav;