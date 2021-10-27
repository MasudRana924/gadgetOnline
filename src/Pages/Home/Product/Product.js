import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    const { _id, name, price, img, } = props.product

    return (
        <Col className=" mt-3">
            <div className="card-style ms-3">
                <Link to={`/details/${_id}`} >
                    <img src={img} className="image" alt="" />
                </Link>

                <div>
                    <Link to={`/details/${_id}`} className="text-decoration-none">
                        <p className=" text-start ms-3">{name.slice(0, 25)}</p>
                    </Link>

                    <div className="d-flex para-style">
                        <p className="text-danger text-start ms-3">${price}</p>
                        <button onClick={() => props.handleAddToCart(props.product)} className="button rounded-circle "><p className="plus ">+</p> </button>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Product;