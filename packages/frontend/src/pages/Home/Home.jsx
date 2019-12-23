import React from 'react';
import { Link } from 'react-router-dom';
function Home() {

  return(
    <React.Fragment>
      <h1>The Nerdy Bits Homepage</h1>
      <p>A place for quirky and fun developer swag!</p>
      <Link to="/products">All Products</Link>
    </React.Fragment>
  )
}

export default Home;