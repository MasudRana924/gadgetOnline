import React from 'react';
import { useForm } from 'react-hook-form';
import { clearTheCart, getStoredCart } from '../../Utilies/FakeDb';
import './Shipping.css'


const Shipping = () => {
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    
    const onSubmit = data => {
        
        const savedCart=getStoredCart()
        data.order=savedCart
    fetch('http://localhost:5000/orders',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result=>{
        if(result){
            alert('Orders placed Successfully')
            clearTheCart()
            reset()
        }
    })
    };
    return (
        <div>
        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
           
            <input defaultValue="" {...register("name")} placeholder="Your name" />
            {/* include validation with required or other standard HTML validation rules */}
            <input defaultValue="" {...register("email", { required: true })}  placeholder="Your email"/>
            {/* errors will return when field validation fails  */}
            {errors.email && <span className="error">This field is required</span>}
            <input defaultValue="" {...register("phone")} placeholder="Your phone number" />
            <input defaultValue="" {...register("address")} placeholder="your present address" />
            <input defaultValue="" {...register("city")} placeholder="Your city " />

            <input type="submit" className="input-button" />
        </form>
    </div>
    );
};

export default Shipping;