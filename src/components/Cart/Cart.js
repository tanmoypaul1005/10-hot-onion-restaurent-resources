import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Cart = (props) => {
  const cart=props.cart;

  let total=0;
  for (let i = 0; i<cart.length; i++) {
    const product = cart[i];
    total=total+product.price*product.quantity; 
  }

  let charges=0;
  if(total>15){
    charges=4.99;
  }
  else if(total>35){
    charges=0;
  }
  else if(total>0){
    charges=12;
  }

  const tex=(total/10);
    // const grandTotatal=(total+shipping+Number(tex)).toFixed;

    const formatNumber=num=>{
        const precision=num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
          <h4>Order Summary</h4>
          <p>Item Ordered: {cart.length}</p>
          <p>Product Price : ${formatNumber(total)}</p>
          <p>Delivery charges: ${formatNumber(charges)}</p>
          <p><small>TAX + VAT : ${formatNumber(tex)}</small></p>
          <p>Total Price  : ${formatNumber(total+charges+tex)}</p>

         <Link to="/shipment">
         <Button  variant="success">Checkout Your Food</Button>
         </Link>
   
        </div>
    );
};

export default Cart;