import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Facebook from '../../images/facebook.svg';
import google from '../../images/search.svg';
import img from '../../images/signIn.jpg';
import twitter from '../../images/twitter.svg';
import UnderLine from '../Underline/UnderLine';
import './signIn.css';

const SignIn = () => {
    return (
        <Container fluid>
            <Row>
            <Col sm={6}>
                <img src={img} className="w-100" alt="" />
            </Col>
            <Col sm={6} className="p-5 container">
            <Container>
            <Form>
                <h1 className="text-center">Sign in for free</h1>
                <UnderLine/>
                <Form.Group className="mb-3" controlId="formBasicUser">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your User Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Text>
                       <NavLink to="/home">Forgot password ?</NavLink>
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I agree with all the terms and Condition" />
                </Form.Group>
                <NavLink to="/home">
                    <button className="my-btn-1">
                        Sign In
                    </button>
                </NavLink>
            </Form>
            <div className="my-5">
               <div className="alternateSignIn">
                    <h4 className="text-center py-3"> Or , Sign In with </h4>
               </div>
                
                <div className="d-flex justify-content-evenly w-75 mx-auto">
                    <NavLink to="/home">
                        <img src={google}  className=" icons" alt="" />
                    </NavLink>
                    
                    <NavLink to="/home">
                        <img src={Facebook}  className=" icons" alt="" />
                    </NavLink>
                
                    <NavLink to="/home">
                        <img src={twitter} className=" icons" alt="" />
                    </NavLink>
                </div>
                   
            </div>
            </Container>
            </Col>
        </Row>
        </Container>
    );
};

export default SignIn;