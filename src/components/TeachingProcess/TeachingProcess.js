import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import assingment from '../../images/assignment.jpg';
import quiz from '../../images/quiz.jpg';
import video from '../../images/video.jpg';
import UnderLine from '../Underline/UnderLine';

const TeachingProcess = () => {
    return (
        <section className="my-5 py-5 text-center">
            <h1>Our Teaching Process</h1>
            <UnderLine/>
            <Row className="my-5">
                <MyCard src={video} title="Video Explaination"/> 
                <Col className="d-flex align-items-center justify-content-center fs-1">
                    <FontAwesomeIcon icon ={faArrowRight} size="lg" style={{color:'lightcoral'}}/>
                </Col>
                <MyCard src={quiz} title="Quizs"/>
                <Col className="d-flex align-items-center justify-content-center fs-1">
                    <FontAwesomeIcon icon ={faArrowRight} size="lg" style={{color:'lightcoral'}}/>
                </Col>
                <MyCard src={assingment} title="Assingments"/>
            </Row>
        </section>
    );
};

const MyCard = (props) => {
    const {src,title} = props;
    return (
        <Col sm className="d-flex justify-content-center">
            <Card style={{width:'20rem'}} className="p-3 shadow rounded-3">
                <div className="d-flex justify-content-center">
                    <Card.Img variant="top" src={src} className="w-75"/>
                </div>
                <Card.Title className="fs-3">{title}</Card.Title>
            </Card>
        </Col>
    )

}
export default TeachingProcess;