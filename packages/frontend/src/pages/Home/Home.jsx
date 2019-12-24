import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fire from '../../config/fire';

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    let items;
    const dbRef = fire.firestore();
    dbRef.collection("products")
      .get()
      .then(collection => {
        console.log(collection.docs);
        items = collection.docs.map(product => {
          const data = product.data();
          const id = product.id;
          return {id, ...data};
        })
        setProducts(items);
      })
      .catch(err => {
        console.log("There seems to be an error fetching the products:", err);
      })
  },[]);
  return(
    <React.Fragment>
      <h1>The Nerdy Bits Homepage</h1>
      <p>A place for quirky and fun developer swag!</p>
      <ul>
        {products.map(product => <li key={product.id}>{product.name}</li>)}
      </ul>
      <Link to="/products">All Products</Link>
    </React.Fragment>
  )
}

export default Home;