import React from 'react';
import {Link} from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import styled from '@emotion/styled';

function Checkout(props) {

  const Input = styled.input`
    font-family: 'Roboto Slab', serif;
    font-size: 18px;
    border: 2px solid #fff;
    border-bottom: 2px solid #000;
    margin-bottom: 20px;
    padding: 10px;

    &:focus {
      border: 2px solid #000;
      outline: none;
    }
  `;

  const subAmount = props.invoice.itemList.total();
  const shipping = 10;

  const totalAmount = () => {
    let total = subAmount + shipping;
    return total;
  }

  return(
    <React.Fragment>
      <div style={{padding: "32px"}}>
        <h1 style={{fontFamily: "Roboto Slab"}}>Checkout Page</h1>
        
        <div style={{marginBottom: "32px", background: "#fff", padding: "16px", boxShadow: "2px 2px 4px 0px rgba(204,204, 204, 1)", textAlign: "right", fontFamily: "Roboto Slab"}}>
          <div><strong>Sub Amount:</strong> {props.invoice.itemList.total().toFixed(2)}</div>
          <div><strong>Shipping:</strong> {shipping.toFixed(2)}</div>
          <div style={{fontSize: "24px"}}><strong>Total Amount:</strong> {totalAmount().toFixed(2)}</div>
        </div>
        <div style={{display: "flex", flexDirection: "row nowrap", justifyContent: "space-between"}}>
          <div><Link to="/cart" style={{background: "#000", padding: "16px", color: "#fff", textDecoration: "none", fontFamily: "Roboto Slab"}}>Update Cart</Link></div>
          <div><Link to="/home" style={{background: "#000", padding: "16px", color: "#fff", textDecoration: "none", fontFamily: "Roboto Slab"}}>Continue Shopping</Link></div>
        </div>
        <div style={{marginTop: "32px", marginBottom: "32px", background: "#fff", padding: "16px", boxShadow: "2px 2px 4px 0px rgba(204,204, 204, 1)", fontFamily: "Roboto Slab"}}>
          <h2>Customer Details</h2>
          <form>
            <div style={{display: "grid"}}>
              <Input type="text" placeholder="Customer Name" />
              <Input type="text" placeholder="Customer Email" />
            </div>
            <div style={{display: "grid"}}>
              <h3>Delivery Address</h3>
              <Input type="text" placeholder="Street Address" />
              <Input type="text" placeholder="Suburb" />
              <Input type="text" placeholder="State" />
              <Input type="text" placeholder="Postcode" />
              <Input type="text" placeholder="Country" />
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default inject("invoice")(observer(Checkout));