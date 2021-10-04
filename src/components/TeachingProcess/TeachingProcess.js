import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import assingment from '../../images/assignment.jpg';
import img from '../../images/fun-fact.jpg';
import quiz from '../../images/quiz.jpg';
import video from '../../images/video.jpg';
import UnderLine from '../Underline/UnderLine';
import './TeachingProcess.css';

const TeachingProcess = () => {
    return (
        <section className="mt-5 mb-2">
            {/* teaching process section */}
            <h1 className=" text-center fw-bold">Our Teaching Process</h1>
            <UnderLine/>
            <Row className="mt-5  text-center">
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

            {/* fun fact section */}
            <div className="fs-5">
                <Row className="align-items-center">
                    <Col sm={8} className="mt-5 mt-lg-0">
                        <h2 className="fw-bold fs-2 fun-heading">Fun Fact : </h2>
                        <p>
                            We are gonna learn just about Math and Science ?
                            Nope . We are gonna make your math and science fun. After all, you have to be a cool Dude. You can learn hardest formulas as well as some sence of humar 😅.Trust me, you can never feel boring by watching our videos and doing our projects . Because we will teach you the hardest formula by your silly daily life examples . So , best of Luck 😌.
                        </p>
                    </Col>
                    <Col sm={4}>
                        <img src={img} alt="" className="img-fluid"/>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

//single Card
const MyCard = (props) => {
    const {src,title} = props;
    return (
        <Col sm={3} className="d-flex justify-content-center">
            <Card style={{width:'25rem'}} className="p-3 shadow rounded-3">
                <div className="d-flex justify-content-center">
                    <Card.Img variant="top" src={src} className="w-100"/>
                </div>
                <Card.Title className="fs-3">{title}</Card.Title>
            </Card>
        </Col>
    )

}
export default TeachingProcess;