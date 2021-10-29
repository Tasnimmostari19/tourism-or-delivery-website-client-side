import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './plan.css'

const Plan = ({ plan }) => {
    const { name, img, description } = plan;

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
                            <Button className='book-btn'>Book Now</Button>
                        </Card.Body>
                    </Card>
                </Col>
            }

        </div>
    );
};

export default Plan;