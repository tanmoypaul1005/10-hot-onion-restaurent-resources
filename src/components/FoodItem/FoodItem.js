import React from 'react';
import { Button } from 'react-bootstrap';
import './FoodItem.css';
const FoodItem = (props) => {
    const{id,name,about,price,img}=props.fooditems;
    return (
    
      <div className="fooditem">

        <div><img src={img}/></div>

        <div className="detail">
        <h5>{name} </h5>
        <p>{about}</p>
        <p>${price}</p>
        <Button onClick={()=>props.handleAddProduct(props.fooditems)} variant="danger">Order Now</Button>
        </div>
      </div>
       
    );
};
 
export default FoodItem;