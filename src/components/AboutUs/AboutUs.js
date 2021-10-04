import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import img from '../../images/aboutUs.jpg';
import './AboutUs.css';

const AboutUs = () => {
    const history = useHistory()
    const handleClick = () => {
        history.push('/home')
    }
    return (
        <Container>
            <Row className="align-items-center my-5">
                <Col sm={6}>
                    <h1 className="display-2 heading fw-bold">ABOUT US</h1>
                    <p className="about-us-text">Our Online teaching journey starts from 2014.Our goal was to make Math and Science easy and fun. We are a New York based online Company . Nazifa Mashiat Pushon ,founder and CEO ,started our first online teaching service in 10 June , 2016 .Now we are the most famouns online educator of Math and Science in internet. We are now the team of 40 people , working our hardest to make learing easy and fun of the hardest topics. Our main goal is to  reach the 4,0000 subsriber in 2021.
                    </p>
                    <button className="my-btn-2" onClick={handleClick}>Go Back </button>
                </Col>
                <Col sm={6}>
                    <img src={img} className="img-fluid" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;