import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Rating from 'react-rating';
import './Details.css'

const Details = () => {
    const { productsId } = useParams()
    const [products, setProducts] = useState({})
    useEffect(() => {
        fetch(`https://whispering-beyond-98113.herokuapp.com/products/${productsId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])
    return (
        <Container fluid className="mt-5">
            <Row xs={1} md={3}>
                <Col md={2}></Col>
                <Col md={8}>
                    <div className="details-card">
                        <div>
                            <img src={products.img} alt="" />
                            <button className=" button-cart">Add to Cart</button><button className=" button-buy">Add to Cart</button>
                        </div>

                        <div className="details">
                            <p className=" text-start fs-4 ms-3">{products.name}</p>

                            <p className="text-start ms-3">
                                <span className="text-muted">
                                    Sell by
                                </span><span className="fs-5"> {products.seller} </span></p>
                            <p className="text-start ms-3">
                                <span className="text-muted">
                                    Stock in
                                </span><span className="fs-5"> {products.stock} <span className="text-muted">
                                    items
                                </span> </span> </p>
                            <p className=" text-start ms-3"><span className="text-muted">
                                Price :
                            </span><span className="fs-5">
                                    ${products.price}
                                </span> </p>
                            <Rating
                                initialRating={products.star}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly></Rating>

                        </div>

                    </div>
                </Col>
                <Col md={2}></Col>
            </Row>

        </Container>
    );
};

export default Details;