import React from 'react';
import { Container, Row, Col, Form ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faPlus } from '@fortawesome/free-solid-svg-icons'
import './AddProducts.css'
import { useRef } from 'react';

const AddProducts = () => {
    const keyRef=useRef()
    const catRef=useRef()
    const nameRef=useRef()
    const sellerRef=useRef()
    const stockRef=useRef()
    const starRef=useRef()
    const priceRef=useRef()
    const imgRef=useRef()

    const handleAddProduct=(e)=>{
        const key=keyRef.current.value 
        const cat=catRef.current.value 
        const name=nameRef.current.value 
        const seller=sellerRef.current.value 
        const stock=stockRef.current.value 
        const star=starRef.current.value 
        const price=priceRef.current.value 
        const img=imgRef.current.value 
        const product={key,cat,name,seller,stock,star,price,img}
        fetch('https://whispering-beyond-98113.herokuapp.com/products',{
            method:'post',
            headers:{
                'content-type':'application/json'

            },
            body:JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Product added succesfully')
                e.target.reset()
            }
        })
        e.preventDefault()
    }
    
    return (
        <Container fluid className="mt-5 pt-5" >
            <Row md={2}>
                <Col md={3}>


                    <div >

                        <Link to="/owner" className="text-decoration-none">

                            <p className="mt-3"> <FontAwesomeIcon icon={faUserFriends} className=" mt-3 text-primary me-1" /> Orders list</p>
                        </Link>
                        <Link to="/add" className="text-decoration-none">

                            <p >
                                <FontAwesomeIcon icon={faPlus} className=" mt-3 text-danger me-1" />
                                Add Products

                            </p>
                        </Link>
                    </div>


                </Col>

                <Col md={9}>
                    <div className="form">
                    <Form  onSubmit={handleAddProduct}>
                        <Row className="mb-3 text-start ">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Key</Form.Label>
                                <Form.Control type="text" ref={keyRef}placeholder="Enter key" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Category</Form.Label>
                                <Form.Control type="text" ref={catRef}placeholder="Enter Category" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3 text-start">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control ref={nameRef} type="name" placeholder="Enter name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Seller</Form.Label>
                                <Form.Control ref={sellerRef} type="text" placeholder="Enter seller" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3 text-start">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Stock</Form.Label>
                                <Form.Control ref={stockRef} type="number" placeholder="Enter stock " />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Star</Form.Label>
                                <Form.Control ref={starRef}type="number" placeholder="Enter star" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3 text-start">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Price</Form.Label>
                                <Form.Control ref={priceRef}type="number" placeholder="Enter price" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Image</Form.Label>
                                <Form.Control ref={imgRef}type="text" placeholder="Image" />
                            </Form.Group>
                        </Row>
                       
                           <Button className="w-50 mx-auto " variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                    </div>
                </Col>

            </Row>

        </Container>
    );
};

export default AddProducts;