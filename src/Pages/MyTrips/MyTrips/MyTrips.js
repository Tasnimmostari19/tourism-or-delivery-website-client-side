import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const MyTrips = () => {

    const [myTrips, setMyTrips] = useState([])

    const { user } = useAuth();





    useEffect(() => {

        const url = `https://bashful-stage-production.up.railway.app/bookings`;
        fetch(url)
            .then(res => res.json())
            .then(datas => {

                const trip = datas.filter(data => data.email == user.email)
                setMyTrips(trip);

            })

    }, [])


    const handleDeleteUser = id => {
        const proceed = window.confirm('Delete sure?')
        if (proceed) {
            const url = `https://bashful-stage-production.up.railway.app/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const restOrders = myTrips.filter(order => order._id !== id)
                        setMyTrips(restOrders);
                    }
                })
        }

    }



    return (
        <div>
            <h2>My Trips</h2>
            <Row xs={1} md={2} className="g-4">
                {
                    myTrips.map(
                        myTrip => <Col key={myTrip._id}>
                            <Card className='card-style'>
                                <Card.Body>
                                    <Card.Title>Name: {myTrip?.name}</Card.Title>
                                    <Card.Text>
                                        Email: {myTrip?.email}
                                    </Card.Text>
                                    <Card.Text>
                                        Booking id: {myTrip?.booking}
                                    </Card.Text>
                                    <Card.Text>
                                        Date: {myTrip?.date}
                                    </Card.Text>
                                    <Card.Text>
                                        Phone: {myTrip?.phone}
                                    </Card.Text>
                                    <Card.Text>
                                        Status: {myTrip?.status}
                                    </Card.Text>

                                    <Button onClick={() => handleDeleteUser(myTrip._id)} className='book-btn'>Delete</Button>

                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>

        </div>
    );
};

export default MyTrips;