import React, {useState} from 'react';
import styled from '@emotion/styled';

function Product(props) {

  const ProductDiv = styled.div`
    background: #fff;
    padding: 16px;
    box-shadow: 2px 2px 4px 0px rgba(204,204, 204, 1);
    max-height: 430px;
  `;

  const Title = styled.h3`
    font-family: "Roboto Slab";
  `;

  const Price = styled.p`
    font-family: "Roboto Slab";
  `;

  const ImageContainer = styled.div`
    background: #efefef;
    padding: 8px;
    display: flex;
    flex-direction: row nowrap;
    justify-content: center;
  `;

  const Button = styled.button`
    border: none;
    border: 2px solid #000;
    margin: 4px;
    padding: 8px;
    font-family: "Roboto Slab";
    font-size: 16px;

    &:hover {
      background: #000;
      color: #fff;
    }
  `;

  const [selectedVariant, setSelectedVariant] = useState(null);

  const addProductToCart = product => {
    props.selectProduct(product, selectedVariant);
  }

  const selectVariant = (variant) => {
    setSelectedVariant(variant);
  }

  const {product} = props;
  return(
    <React.Fragment>
      <ProductDiv key={product.id}>
        <ImageContainer>
          <img src={product.thumbnail_url} alt={product.name} width="250"/>
        </ImageContainer>
        <Title>{product.name}</Title>
        <Price>$ {product.retail_price} {product.currency}</Price>
        <div>
          {product.variants.map((variant,i) =>
            <React.Fragment key={i}>
              <input type="radio" value={variant} name="variant" onChange={() => selectVariant(variant)}/>
              <label htmlFor={variant}>{variant}</label>
            </React.Fragment>
          )}
        </div>
        {selectedVariant && <Button onClick={() => addProductToCart(product)}>Add to Cart</Button>}
      </ProductDiv>
    </React.Fragment>
  )
}

export default Product;