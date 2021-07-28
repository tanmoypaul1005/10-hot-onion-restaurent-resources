import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import FoodItem from '../FoodItem/FoodItem';

const FoodDetail = () => {
    const {foodid}=useParams();
    const fooditem=fakeData.find(pd=>pd.id===foodid);
    return (
        <div>
           <FoodItem  fooditem={fooditem}></FoodItem>
        </div>
    );
};

export default FoodDetail;