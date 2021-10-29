import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar style={{ height: '80px' }} bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">book A trip</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Trips</Nav.Link>
                        <Nav.Link href="#pricing">My Trips</Nav.Link>
                        <Nav.Link href="#pricing">Manage All Orders</Nav.Link>
                        <Nav.Link href="#pricing">Add a Trip</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;