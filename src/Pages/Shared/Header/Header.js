import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user,logOut}=useAuth()
    return (
        <Container fluid>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" className="top-name">Online Gadget</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="ms-5">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/home" className="link ps-5">Home</Link>
                           
                            <Link to="/about" className="link ps-5">About</Link>
                            <Link to="/contact" className="link ps-5">Contact</Link>


                        </Nav>
                        <Navbar.Text>

                        {
                                    user.email && <span className="text-dark me-3">Welcome , <span className="text-danger">{user.displayName}</span></span>
                                }
                                <br />

                                {
                                    user.email ? <div className="me-1">
                                        
                                       
                                        <Link to="/orders" className="me-1"> <Button variant="dark" size="sm">My Orders</Button></Link>

                                        <Button onClick={logOut}variant="danger" size="sm" >Logout</Button>
                                    </div> :  <Link to="/login"><Button variant="dark" size="sm">Sign-in</Button></Link>
                                }



                           
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;