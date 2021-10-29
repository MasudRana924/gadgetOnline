import React from 'react';
import { Col, Container, Dropdown, DropdownButton, Row, Button, Modal, Spinner, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import './Products.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../../Utilies/FakeDb';
import img from '../../../Images/laptop.jpg'
import img2 from '../../../Images/headphone.jpg'
import img3 from '../../../Images/01.jpg'
const Products = () => {
    const [products, setProducts] = useState([])
    const [displayProducts, setDisplayProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    const [cart, setCart] = useState([])
    const [show, setShow] = useState(false);
    const size = 12

    useEffect(() => {
        fetch(`https://whispering-beyond-98113.herokuapp.com/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                setDisplayProducts(data.products)
                const count = data.count
                const pageNumber = Math.ceil(count / size)
                setPageCount(pageNumber)
            })
    }, [page])
    useEffect(() => {
        const savedCart = getStoredCart()
        console.log(savedCart)
        const keys = Object.keys(savedCart)
        fetch('https://whispering-beyond-98113.herokuapp.com/products/bykeys', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)

        })
            .then(res => res.json())
            .then(products => {

                if (products.length) {

                    const storedCart = [];
                    for (const key in savedCart) {
                        const addedProduct = products.find(product => product.key === key);
                        if (addedProduct) {
                            // set quantity
                            const quantity = savedCart[key];
                            addedProduct.quantity = quantity;
                            storedCart.push(addedProduct);
                        }
                    }
                    setCart(storedCart);
                }
            })

    }, [])

    const handleAddToCart = product => {
        // compare kora hoise ager cart er moddhe ja add kora hoichilo 
        const exits = cart.find(pd => pd.key === product.key)
        let newCart = []
        if (exits) {
            const remaining = cart.filter(pd => pd.key !== product.key)
            exits.quantity = exits.quantity + 1
            newCart = [...remaining, product]

        }
        else {
            product.quantity = 1
            newCart = [...cart, product]
        }
        // const newCartTwo = [...cart, product];
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);
    }
    // searcg
    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }

    // modal er function
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // cart er total 
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        //local storage  e itemthakle 1 + hobe , r hole 1hobe 
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;


    //    font awesome
    const element = <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
    const phone = <FontAwesomeIcon icon={faPhoneAlt} className=" phone-icon" />

    return (
        <Container className="pt-1">
            <div>
                <Row xs={1} md={3}>
                    <Col md={2} className="mt-1">
                        <DropdownButton
                            variant=""
                            title="Products"

                            id="input-group-dropdown-1"
                        >
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                    <Col md={7} className="mt-1">
                        <div className="d-flex">

                            <input type="text" onChange={handleSearch} className="input" placeholder="Search a product" />
                            <div>
                                <button className="cart-button" variant="white" onClick={handleShow}>
                                    {element}
                                    <span className="cart-item">{totalQuantity}</span>
                                </button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Order Summary</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>Total: <span className="text-danger"> ${total.toFixed(2)}</span></p>

                                        <p>Shipping:<span className="text-danger"> ${shipping}</span></p>
                                        <p>tax:<span className="text-danger"> ${tax.toFixed(2)}</span></p>
                                        <p>Grand Total:<span className="text-danger"> ${grandTotal.toFixed(2)}</span></p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Link to="/shipping">
                                            <Button variant="primary">
                                                Proceed
                                            </Button>
                                        </Link>
                                    </Modal.Footer>
                                </Modal>
                            </div>


                        </div>
                    </Col>
                    <Col md={3} className="mt-1">
                        <div className="d-flex ms-5">
                            <div className=" mt-1 me-1 rounded-circle phone">
                                {phone}

                            </div>
                            <div>
                                <span className="span">+08852254063</span> <br />
                                <span className="span">+09914212076</span> <br />
                                <span className="text-secondary text-muted">24/7 hours open</span>
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>
            <div>
                <Carousel className="slider">
                    <Carousel.Item interval={1000} className="slider ">
                        <img
                            className="image-slider"
                            src={img}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={500} className="slider">
                        <img
                            className="image-slider"
                            src={img2}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item className="slider">

                        <img
                            className="image-slider"
                            src={img3}
                            alt="First slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="">
                {displayProducts.length === 0 ? < div className="spinner"> <Spinner animation="border" className="spinner" />
                </div>
                    : <Row xs={1} md={4}>
                        {
                            displayProducts.map(product => <Product
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            ></Product>)
                        }
                    </Row>
                }
                <div className="pagination w-50 mx-auto">
                    {
                        [...Array(pageCount).keys()].map(number => <button
                            key={number}
                            onClick={() => setPage(number)}
                            className={number === page ? 'selected' : ''}

                        >{number + 1}</button>)
                    }

                </div>
            </div>

        </Container>
    );
};

export default Products;