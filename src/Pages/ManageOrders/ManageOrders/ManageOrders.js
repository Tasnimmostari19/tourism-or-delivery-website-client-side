import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ManageOrders = () => {


    const [orders, setOrders] = useState([]);



    useEffect(() => {
        fetch('https://tourism-or-delivery-website-server-side.vercel.app/bookings')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])


    const handleDeleteUser = id => {
        const proceed = window.confirm('Delete sure?')
        if (proceed) {
            const url = `https://tourism-or-delivery-website-server-side.vercel.app/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const restOrders = orders.filter(order => order._id !== id)
                        setOrders(restOrders);
                    }
                })
        }

    }


    const handlePending = id => {
        const url = `https://tourism-or-delivery-website-server-side.vercel.app/bookings/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Approved')

                }
            })
    }


    console.log(orders);


    return (
        <div>
            <h2>Manage All Orders</h2>

            <Row xs={1} md={2} className="g-4">
                {
                    orders.map(order =>
                        <Col key={order._id}>
                            <Card className='card-style'>
                                <Card.Body>
                                    <Card.Title>Name: {order.name}</Card.Title>
                                    <Card.Text>
                                        Email: {order.email}
                                    </Card.Text>
                                    <Card.Text>
                                        Booking Id: {order.booking}
                                    </Card.Text>
                                    <Card.Text>
                                        Trip date: {order.date}
                                    </Card.Text>
                                    <Card.Text>
                                        Phone no: {order.phone}
                                    </Card.Text>

                                    <Button onClick={() => handleDeleteUser(order._id)} className='book-btn'>Delete</Button>


                                    <Button onClick={() => handlePending(order._id)} className='book-btn'>{order.status}</Button>

                                </Card.Body>
                            </Card>
                        </Col>

                    )
                }
            </Row>

        </div>
    );
};

export default ManageOrders;