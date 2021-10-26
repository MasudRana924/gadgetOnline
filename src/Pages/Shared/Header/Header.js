import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
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
                            <Link to="/login"><Button variant="dark" size="sm">Sign-in</Button></Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;