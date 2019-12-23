import React from 'react';
import { Link } from 'react-router-dom';

function Products() {

  return(
    <React.Fragment>
      <h1>All Products</h1>
      <Link to="/home">Back to home page</Link>
    </React.Fragment>
  )
}

export default Products;