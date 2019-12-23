import React from 'react';
import Header from '../../components/Header/Header.jsx';
import ContentContainer from '../../components/ContentContainer/ContentContainer.jsx';

function Products() {

  return(
    <React.Fragment>
      <Header title="Products" />
      <ContentContainer>
      <h1>Products Page</h1>
      </ContentContainer>
    </React.Fragment>
  )
}

export default Products;