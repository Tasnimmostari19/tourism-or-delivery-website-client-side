import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './plan.css'

const Plan = ({ plan }) => {
    const { name, img, description, _id } = plan;

    return (
        <div>

            {
                <Col>
                    <Card className='card-style' style={{ height: '708.600px' }}>
                        <Card.Img variant="top" src={img} style={{ height: '446.61px' }} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Link to={`/placeorder/${_id}`}>
                                <Button className='book-btn'>Book Now</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            }

        </div>
    );
};

export default Plan;