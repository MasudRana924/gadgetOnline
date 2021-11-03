import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';

const Orders = () => {
  const [orders, setOrders] = useState([])
  const {user}=useAuth()
  useEffect(() => {
      fetch(`https://whispering-beyond-98113.herokuapp.com/orders?email=${user.email}`)
          .then(res => res.json())
          .then(data => {
              setOrders(data)
          })
  }, [])
    return (
      <Container fluid >
        <h2>My orders {orders.length}</h2>
  
      </Container>
    );
};

export default Orders;