import React from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';
import {observer, inject} from 'mobx-react';

function Cart(props) {

  console.log(props)
  return(
    <React.Fragment>
      <div style={{padding: "32px"}}>
        <h1 style={{fontFamily: "Roboto Slab"}}>Shopping Cart</h1>
        
        <div style={{background: "#000", color: "#fff", padding: "16px", display: "grid", gridTemplateColumns: "4fr 2fr 2fr 2fr 2fr", fontFamily: "Roboto Slab"}}>
          <span>Item</span>
          <span style={{display:"flex", justifyContent: "center"}}>Size</span>
          <span style={{display:"flex", justifyContent: "center"}}>Unit Price</span>
          <span style={{display:"flex", justifyContent: "center"}}>Quantity</span>
          <span style={{display:"flex", justifyContent: "center"}}>Total</span>
        </div>
        {props.invoice.itemList.items.length === 0 && <div style={{padding:"16px", textAlign: "center", fontFamily: "Roboto Slab", marginTop: "48px"}}>There are no items added to your cart. Please add some!</div>}

        
        {props.invoice.itemList.items.map((item, i) => 
          <div key={i} style={{background: "#fff", padding: "16px", display: "grid", gridTemplateColumns: "4fr 2fr 2fr 2fr 2fr", fontFamily: "Roboto Slab", borderBottom: "1px solid #efefef"}}>
            <span>{item.name}</span>
            <span style={{display:"flex", justifyContent: "center"}}>{item.variant}</span>
            <span style={{display:"flex", justifyContent: "center"}}>{item.price.toFixed(2)}</span>
            <span style={{display:"flex", justifyContent: "center"}}>
              <button onClick={item.decrement} style={{margin: "4px", border: "none", background: "#000", color: "#fff", fontFamily: "Roboto Slab", fontSize: "16px"}}>-</button>
              {item.quantity}
              <button onClick={item.increment} style={{margin: "4px", border: "none", background: "#000", color: "#fff", fontFamily: "Roboto Slab", fontSize: "16px"}}>+</button>
            </span>
            <span style={{display:"flex", justifyContent: "center"}}>{item.total().toFixed(2)}</span>
          </div>
        )}

        <div style={{display: "flex", flexDirection: "row nowrap", justifyContent: "flex-end", fontFamily: "Roboto Slab", padding: "16px", fontSize: "24px"}}><strong>Total</strong>&nbsp;{props.invoice.itemList.total().toFixed(2)}</div>
        <div style={{display: "flex", flexDirection: "row nowrap", justifyContent: "space-between"}}>
          <Link to="/home" style={{color: "#000", fontFamily: "Roboto Slab"}}>Back to home page</Link>
          <Link to="/checkout" style={{background: "#000", padding: "16px", color: "#fff", textDecoration: "none", fontFamily: "Roboto Slab"}}>Proceed to Checkout</Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default inject('invoice')(observer(Cart));