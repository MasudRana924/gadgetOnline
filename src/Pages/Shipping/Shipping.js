import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipping.css'


const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        
        console.log(data)
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