import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <>
            <Navbar  variant="light" className="header">
                <Container>
                    <Navbar.Brand className="fs-2 fw-bold">🤓 Nerd.Com</Navbar.Brand>
                    <Nav className="ms-auto">
                    
                        <Nav.Link>
                            <NavLink to="/home" className="link fs-4 fw-bold px-5 " activeClassName="selected">
                            Home
                            </NavLink>
                        </Nav.Link>
                    
                    
                        <NavLink to="/services" className="link fs-4 fw-bold px-5" activeClassName="selected">
                            Services
                        </NavLink>
                    
                    
                        <NavLink to="/aboutUs" className="link fs-4 fw-bold px-5" activeClassName="selected">
                            About Us
                        </NavLink>
                    
                    
                        <NavLink to="/signIn" className="link fs-4 fw-bold px-5" activeClassName="selected">
                            Sign In
                        </NavLink>
                   
                </Nav>
                </Container>
            </Navbar>
            {/* <Navbar bg="dark" variant="dark" className="header">
                <Container>
                    <Navbar.Brand>Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className="fs-5 px-5 text-dark">
                            <NavLink to="/home" className="link">
                                Home
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link className="fs-5 px-5 text-dark">
                            <NavLink to="/services" className="link">
                                Services
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link className="fs-5 px-5 text-dark">
                            <NavLink to="/signIn" className="link">
                                Sign In
                            </NavLink>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}

            
        </>
    );
};

export default Header;