import React from 'react';
import Header from '../../components/Header/Header.jsx';
import ContentContainer from '../../components/ContentContainer/ContentContainer.jsx';

function Orders() {

  return(
    <React.Fragment>
      <Header title="Orders" />
      <ContentContainer>
        <h1>Orders Page</h1>
      </ContentContainer>
    </React.Fragment>
  )
}

export default Orders;