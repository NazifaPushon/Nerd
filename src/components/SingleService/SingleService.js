import { faArrowRight, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { useHistory } from 'react-router';
import './singleService.css';

const SingleService = (props) => {
    const {title,img,price,time,author,rating,video,id} = props.data;
    const history= useHistory()
    const handleClick = () => {
        history.push(`/service/${id}`)
    }
    return (
        <Col>
            <Card className="my-card">
                <Card.Img variant="top" src={img} style={{height:"15rem"}} />
                <Card.Body className="fs-5">
                    <Card.Title className="fs-4 fw-bold">{title}</Card.Title>
                    <p>Author {author}</p>
                    <p>Price : $ {price}</p>
                    <p>Total Video :{video}</p>
                    <div className="d-flex justify-content-between">
                        <div className="time">
                            <FontAwesomeIcon icon={faClock}/> {time}
                        </div>
                        <div>
                            <Rating
                                initialRating={rating}
                                readonly
                                className="rating"
                                emptySymbol="fa fa-star-o "
                                fullSymbol="fa fa-star"
                            />
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer className="text-center card-footer p-0">
                        <button onClick={handleClick} className="my-btn-2 my-0 w-100 rounded-0"> Learn More  <FontAwesomeIcon icon={faArrowRight}/></button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default SingleService;