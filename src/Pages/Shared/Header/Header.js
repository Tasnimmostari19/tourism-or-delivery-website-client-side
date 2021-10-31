
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div>
            <Navbar style={{ height: '80px' }} bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home">book A trip</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>


                        {user?.email ?
                            <Nav.Link as={Link} to="/mytrips">My Trips</Nav.Link>
                            :
                            <></>
                        }
                        {user?.email ?
                            <Nav.Link as={Link} to="/manageorders">Manage All Orders</Nav.Link>
                            :
                            <></>
                        }
                        {user?.email ?
                            <Nav.Link as={Link} to="/addtrip">Add a Trip</Nav.Link>
                            :
                            <></>
                        }

                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Signout</Button> :
                            <Nav.Link as={Link} to="/login">Signin</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;