import React from 'react';
import styled from '@emotion/styled';

import Logo from '../images/logo.svg';
import Header from '../components/Header/Header.jsx';
import ContentContainer from '../components/ContentContainer/ContentContainer.jsx';
import Newsletter from '../components/Newsletter/Newsletter.jsx';

function Layout(props) {

  const Sidebar = styled.div`
    padding: 48px;
    height: calc(100vh - 186px);
  `;

  return(
    <React.Fragment>
      <Header/>
      <ContentContainer>
        <Sidebar>
          <img src={Logo} alt="The Nerdy Bits Logo" width="120"/>
          <p style={{fontFamily: "Roboto Slab", fontSize: "16px"}}>Subscribe to our newsletter for latest deals and discounts</p>
          <Newsletter />
        </Sidebar>
        {props.children}
      </ContentContainer>
    </React.Fragment>
  )
}

export default Layout;