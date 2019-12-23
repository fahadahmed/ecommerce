import React from 'react';
import Header from '../../components/Header/Header.jsx';
import ContentContainer from '../../components/ContentContainer/ContentContainer.jsx';

function Customers() {

  return(
    <React.Fragment>
      <Header title="Customers" />
      <ContentContainer>
        <h1>Customers Page</h1>
      </ContentContainer>
    </React.Fragment>
  )
}

export default Customers;