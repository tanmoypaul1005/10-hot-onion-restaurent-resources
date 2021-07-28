import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from "../../App";
import './Shipment.css';
const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    const onSubmit = data => console.log('Form Submitted',data);
  
    console.log(watch("example")); 
    return (
        <div className="twin-container">
        <div className="product-container">   
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
            
        <h3 >Edit Delivery Details</h3>

        <Form.Control type="text" defaultValue="Deliver to door" {...register("example")} readOnly/>

        <Form.Control type="text" {...register("name", { required: true, maxLength: 20 })} placeholder="Your Name" />
        {errors.name && <span className="error">Name is required</span>}

        <Form.Control  {...register("phone", { required: true })} placeholder="Your Phone Number" />
        {errors.phone && <span className="error">Phone Number is required</span>}

        <Form.Control type="text"  {...register("address", { required: true })} placeholder="Your Address" />
        {errors.addresses && <span className="error">Address is required</span>}

        <Form.Control type="text" {...register("rode", { required: true })} placeholder="Rode No" />
        {errors.rode && <span className="error">Rode No is required</span>}

        <Form.Control type="text" {...register("rode", { required: true })} placeholder="Flat,suite or floor" />
        {errors.rode && <span className="error">Rode No is required</span>}
         
        <br/>
        <Button variant="success">Save & Continue</Button>
      </form>
      </div>


      
      </div> 
    );
};

export default Shipment;