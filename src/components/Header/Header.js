import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './header.css';

//Header or Navigation Components where all the Navlink has set up
const Header = () => {
    return (
        <>
            <Navbar  variant="light" className="header">
                <Container>
                    <Navbar.Brand className="fs-2 fw-bold">🤓 Nerd.Com</Navbar.Brand>
                    <Nav className="ms-auto">
                        <NavLink to="/home" className="link fs-4 fw-bold px-5 " activeClassName="selected">
                            Home
                        </NavLink>
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
        </>
    );
};

export default Header;