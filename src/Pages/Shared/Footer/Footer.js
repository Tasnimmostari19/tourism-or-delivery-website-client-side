import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>

            <Container>
                <Row>
                    <Col className='footer-title'>
                        <h1 className='font'>book A trip</h1>
                        <p>You decide We plan</p>
                    </Col>

                    <Col className='footer-icon'>
                        <i className="fab fa-facebook-f mx-3"></i>
                        <i className="fab fa-instagram mx-3"></i>
                        <i className="fab fa-twitter mx-3"></i>
                        <i className="fab fa-linkedin-in mx-3"></i>

                    </Col>

                    <Col className='footer-info text-start'>
                        <i className="fas fa-map-marker-alt"> <span className='mx-2'>Flat 20, Reynolds Neck, North Helenaville, FV77 8WS</span></i>
                        <i className="fas fa-phone"> <span className='mx-2'>+8801245781245</span></i><br />
                        <i className="fas fa-envelope"> <span className='mx-2'>bookatrip@gmail.com</span></i>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Footer;