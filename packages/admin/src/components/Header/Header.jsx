import React from 'react';
import fire from '../../config/fire';
import styled from '@emotion/styled';

function Header(props) {
  const Header = styled.div`
    background: #000;
    color: #fff;
    padding: 10px;
    display: flex;
    flex-direction: row wrap;
    justify-content: space-between;
    font-family: 'Roboto Slab', serif;
  `
  const LogoutButton = styled.button`
    background: #000;
    color: #fff;
    border: none;
    font-size: 16px;
    font-family: 'Roboto Slab', serif;
    padding-left: 20px;
    padding-right: 20px;

    &:hover {
      background: #fff;
      color: #000;
    }
  `
  return(
    <Header>
      <p>The Nerdy Bits Admin - {props.title}</p>
      <LogoutButton onClick={() => fire.auth().signOut()}>Log out</LogoutButton>
    </Header>
  )
}

export default Header;