import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css';

//Header or Navigation Components where all the Navlink has set up
const Header = () => {
    return (
        <>
            <Navbar  variant="light" className="header" expand="lg">
                <Container>
                    <Navbar.Brand className="fs-2 fw-bold">🤓 Nerd.Com</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home" className="fs-4 fw-bold px-5  ">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/services" className="fs-4 fw-bold px-5 ">
                            Services
                        </Nav.Link>
                        <Nav.Link as={Link} to="/aboutUs" className="fs-4 fw-bold px-5 ">
                            About Us
                        </Nav.Link>
                        <Nav.Link as={Link} to="/signIn" className="fs-4 fw-bold px-5 ">
                            Sign In
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;