import React, { useState, useEffect } from 'react';
import fire from '../../config/fire';
import styled from '@emotion/styled';
import Product from '../../components/Product/Product.jsx';

function Home() {

  const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: 4fr 4fr 4fr;
    grid-template-rows: 6fr 6fr;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
  `;

  const [products, setProducts] = useState([]);
  const [loading, isLoading] = useState(true);
  const [cart, setCart] = useState([]);

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

  const addProductToCart = (product, selectedVariant) => {
    console.log("Added a new product to cart", product, selectedVariant);
    let selectedProduct = {
      name: product.name,
      currency: product.currency,
      retail_price: product.retail_price,
      category: product.category,
      variant: selectedVariant,
      quantity: 1
    }
    let cartProducts = cart;
    cartProducts.push(selectedProduct);
    setCart(cartProducts);
    console.log(cart);
  }

  if(loading) return <div>Loading...</div>
  return(
    <React.Fragment>
      <ProductsContainer>
        {products.map(product => 
          <Product product={product} key={product.id} selectProduct={addProductToCart} />
        )}
      </ProductsContainer>
    </React.Fragment>
  )
}

export default Home;