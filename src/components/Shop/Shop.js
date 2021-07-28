import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import FoodItem from '../FoodItem/FoodItem';
import './Shop.css';

const Shop= () => {
  const first10=fakeData.slice(0,10);
  const [Products, setProducts] = useState(first10);
  const [cart, setCard] = useState([]);

useEffect(() => {
 const  saveCart=getDatabaseCart();
 const productKeys=Object.keys(saveCart);

 const previousCart=productKeys.map(existingkey=>{
  const product=fakeData.find(pd=>pd.key === existingkey);
  product.quantity= saveCart[existingkey];
  return product;
 })
 setCard(previousCart);
}, [])



function handleAddProduct(product){
  const newcart=[...cart,product];
  setCard(newcart);
  console.log('Product Added',product)
 
      
      }
  
  return (

    <div className="twin-container">
    <div className="food-container">
    {
    Products.map(pd=><FoodItem  
    fooditems={pd} handleAddProduct={handleAddProduct}
    ></FoodItem>)
    }
    </div>
    

    <div className="Card-container">
    <Cart cart={cart}>
    
    </Cart>
    </div>


    </div>
  );
};

export default Shop;