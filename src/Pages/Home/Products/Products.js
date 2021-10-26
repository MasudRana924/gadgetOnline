import React from 'react';
import { Col, Container, Dropdown, DropdownButton, Row, Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import './Products.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../../Utilies/FakeDb';
const Products = () => {
    const [products, setProducts] = useState([])
    const [displayProducts, setDisplayProducts] = useState([]);
    const [cart, setCart] = useState([])
    const [show, setShow] = useState(false);


    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            })
    }, [])
    useEffect(() => {
        if (products.length) {
            //savedcart e database theke data store kora hoise
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }

    }, [products])

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

            <div className="">
                <Row xs={1} md={4}>
                    {
                      displayProducts.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </Row>
            </div>

        </Container>
    );
};

export default Products;