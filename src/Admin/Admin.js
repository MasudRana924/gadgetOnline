import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faPlus ,faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import './Admin.css'
import { useState } from 'react';
import { useEffect } from 'react';


const Admin = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('https://whispering-beyond-98113.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [])

    const handleDeleteUser=id=>{
        const  proceed=window.confirm('Are you sure that you want to delete')
        if(proceed){
         const url=`https://whispering-beyond-98113.herokuapp.com/orders/${id}`
         fetch(url,{
             method:'DELETE'
         })
         .then(res=>res.json())
         .then(data=>{
             if(data.deletedCount>0){
                 alert('user delete successfully ')
                 const remaining=orders.filter(order=>order._id !==id)
                 setOrders(remaining)
             }
         })
        }
     }
    return (
        <Container fluid className="mt-5 pb-5 pt-5">


            <Row xs={2} md={2}>
                <Col md={3}>


                    <div >

                        <Link className="text-decoration-none">

                            <p className="mt-3"> <FontAwesomeIcon icon={faUserFriends} className=" mt-3 text-primary me-1" /> Products list</p>
                        </Link>
                        <Link className="text-decoration-none">

                            <p >
                                <FontAwesomeIcon icon={faPlus} className=" mt-3 text-danger me-1" />
                                Add Products

                            </p>
                        </Link>
                    </div>


                </Col>
                <Col md={9}>
                    <div className="event-list">
                        <div className="d-flex">
                           <div className="info-name">
                             <h6 className="ms-3 text-primary">Name</h6>
                           </div>
                           <div className="info-email">
                           <h6 className=" text-primary">Email</h6>
                           </div>
                           <div className="info-phone">
                           <h6 className=" text-primary">Phone</h6>
                           </div>
                           <div className="info-address">
                           <h6 className=" text-primary">Address</h6>
                           </div>
                           <div className="info-city">
                           <h6 className=" text-primary">City</h6>
                           </div>
                           <div className="delete">
                           <h6 className=" text-primary">Delete</h6>
                           </div>
                        </div>
                        {
                            orders.map(order =>


                                <div className="d-flex mt-3">

                                    <div className="info-name">

                                        <p className="ms-3">{order.name}</p>
                                    </div>
                                    <div className="info-email">
                                        <p className="info">{order.email}</p>
                                    </div>
                                    <div className="info-phone">
                                        <p >{order.phone}</p>

                                    </div>
                                    <div className="info-address">
                                        <p >{order.address}</p>
                                    </div>
                                    <div className="info-city">
                                        <p >{order.city}</p>
                                    </div>
                                    <div className="delete">
                                        <button  onClick={()=>handleDeleteUser(order._id)} className="delete-button">
                                        <FontAwesomeIcon icon={faTrashAlt} className=" text-danger" />
                                        </button>
                                    
                                    </div>
                                </div>
                            )




                        }

                    </div>

                </Col>
            </Row>

        </Container>
    );
};

export default Admin;