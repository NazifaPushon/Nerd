import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import img from '../../images/heroImg.jpg';

const HeroSection = () => {
    const history = useHistory()
    const handleClick = () => {
        history.push('/services');
    }
    return (
        <Row className="align-items-center my-5 py-5">
            <Col sm={6}>
                <div >
                    <h1 className="display-5 fw-bold">Be a Nerd 🤓 </h1>
                    <h1 className="display-5 fw-bold">Learn Math and Science </h1>
                    <h1 className="display-5 fw-bold">Win The Whole World</h1>
                    <h1 className="display-5 fw-bold">with <span className="hero-text">Nerd.Com</span> </h1>
                </div>
                <p className="my-4 fs-5">
                    This is a online educational institude . We made learnig math and science fun !
                </p>
                <button className="my-btn-1" onClick={handleClick}>Learn More</button>
            </Col>
            <Col sm={6}>
                <img className="img-fluid" src={img} alt="" />
            </Col>
        </Row>
    );
};

export default HeroSection;