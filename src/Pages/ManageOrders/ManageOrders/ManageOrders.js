import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ManageOrders = () => {


    const [orders, setOrders] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    const handleDeleteUser = id => {
        const proceed = window.confirm('Delete sure?')
        if (proceed) {
            const url = `http://localhost:5000/bookings/${id}`;
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



    return (
        <div>
            <h2>Manage All Orders</h2>

            <Row xs={1} md={2} className="g-4">
                {
                    orders.map(order =>
                        <Col key={order._id}>
                            <Card className='card-style'>
                                <Card.Body>
                                    <Card.Title>{order.name}</Card.Title>
                                    <Card.Text>
                                        {order.email}
                                    </Card.Text>
                                    <Card.Text>
                                        {order.booking}
                                    </Card.Text>
                                    <Card.Text>
                                        {order.date}
                                    </Card.Text>
                                    <Card.Text>
                                        {order.phone}
                                    </Card.Text>

                                    <Button onClick={() => handleDeleteUser(order._id)} className='book-btn'>Delete</Button>

                                    <Link to={`/bookings/${order._id}`}>
                                        <Button className='book-btn'>{order.status}</Button>
                                    </Link>
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