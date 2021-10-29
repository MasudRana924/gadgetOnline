import React from 'react';
import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

const Footer = () => {
    return (
        <Container fluid className="mt-5 footer pb-5">
            <div>
            <Row xs={3} md={3}>
                    <Col className="mt-1">
                        <DropdownButton
                            variant=""
                            title="Locations"

                            id="input-group-Dropdown-1"
                        >
                            <Dropdown.Item href="#">Dhaka</Dropdown.Item>
                            <Dropdown.Item href="#">Chittagaong</Dropdown.Item>
                            <Dropdown.Item href="#">Sylhet</Dropdown.Item>
                           
                            <Dropdown.Item href="#">Rajshahi</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                    <Col className="mt-1">
                       
                         <div className="w-50 mx-auto user-details">
                         <h4 className="text-center">My Account</h4>
                           <p className="text-start">My account</p> 
                           <p className="text-start">My address</p> 

                           <p className="text-start">Helps & Support</p> 
                           <p className="text-start">LogOut</p>
                         </div>
                            

                        
                    </Col>
                    <Col className="mt-1">
                    <FontAwesomeIcon icon={faFacebook} className="fb-icon mt-3" />
                <FontAwesomeIcon icon={faInstagram} className="insta-icon ms-3 mt-3" />
                <FontAwesomeIcon icon={faYoutube} className="youtube-icon ms-3 mt-3" />
                <FontAwesomeIcon icon={faGoogle} className="google-icon ms-3 mt-3" />
                    </Col>
                </Row>
            </div>

            <p className="text-center">© design in 2021 </p>
        </Container>
    );
};

export default Footer;