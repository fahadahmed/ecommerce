import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import ContentContainer from '../../components/ContentContainer/ContentContainer.jsx';
import SubHeaderMenu from '../../components/SubHeaderMenu/SubHeaderMenu.jsx';

function AddProduct() {
  return(
    <React.Fragment>
      <Header title="Products" />
        <ContentContainer>
          <div>
            <SubHeaderMenu>
              <strong>Add a new product</strong>
              <Link to="/products">Back to Products</Link>
            </SubHeaderMenu>
            <p>This is a child component</p>
          </div>
        </ContentContainer>
    </React.Fragment>
  )
}

export default AddProduct;