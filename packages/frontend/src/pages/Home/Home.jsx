import React, { useState, useEffect } from 'react';
import fire from '../../config/fire';

import styled from '@emotion/styled';

function Home() {

  const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: 4fr 4fr 4fr;
    grid-template-rows: 6fr 6fr;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
  `;

  const Product = styled.div``;

  const [products, setProducts] = useState([]);
  const [loading, isLoading] = useState(true);

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
        isLoading(false);
      })
      .catch(err => {
        console.log("There seems to be an error fetching the products:", err);
      })
  },[]);

  if(loading) return <div>Loading...</div>
  return(
    <React.Fragment>
      <ProductsContainer>
        {products.map(product => 
          <div key={product.id} style={{background: "#fff", fontFamily: "Roboto Slab", padding: "16px", boxShadow: "2px 2px 4px 0px rgba(204,204, 204, 1)"}}>
            <div style={{background: "#efefef", padding: "8px", display: "flex", flexDirection: "row nowrap", justifyContent: "center"}}>
              <img src={product.thumbnail_url} alt={product.name} width="250" style={{background: "#efefef"}} />
            </div>
            <h3>{product.name}</h3>
            <p>$ {product.retail_price} {product.currency}</p>
            {product.variants.map((variant,i) =>
              <a href="" style={{border: "none", background: "#efefef", margin: "4px", padding:"8px", fontFamily: "Roboto Slab", fontSize: "16px"}} key={i}>{variant}</a>
            )}
            <button style={{border: "none", border: "2px solid #000", margin: "4px", padding:"8px", fontFamily: "Roboto Slab", fontSize: "16px"}}>Add to Cart</button>
          </div>
        )}
      </ProductsContainer>
    </React.Fragment>
  )
}

export default Home;