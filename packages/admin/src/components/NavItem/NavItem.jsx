import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

function NavItem(props) {
  const Div = styled.div`
    border-bottom: 1px #efefef solid;
    padding: 8px;
    color: #000;
    text-decoration: none;
  `;
  return(
    <Link to={props.url}><Div>{props.title}</Div></Link>
  )
}

export default NavItem;