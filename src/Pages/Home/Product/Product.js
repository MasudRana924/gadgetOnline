import React from 'react';
import { Col } from 'react-bootstrap';
import './Product.css'

const Product = (props) => {
    const{name,price,img,}=props.product
    
    return (
        <Col className=" mt-3">
           <div className="card-style ms-3">
           <img src={img} className="image" alt="" />
           <div>
               <p className=" text-start ms-3">{name.slice(0,25)}</p>
               
               <div className="d-flex para-style">
               <p className="text-danger text-start ms-3">${price}</p>
                <button onClick={()=>props.handleAddToCart(props.product)} className="button rounded-circle "><p className="plus ">+</p> </button>
               </div>
           </div>
           </div>
        </Col>
    );
};

export default Product;