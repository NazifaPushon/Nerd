import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './singleService.css';

const SingleService = (props) => {
    const {title,img,price,time,author,rating} = props.data;
    
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} style={{height:"15rem"}}/>
                <Card.Body className="fs-5">
                    <Card.Title className="fs-4 fw-bold">{title}</Card.Title>
                    <p>Author {author}</p>
                    <p>Price : $ {price}</p>
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
            </Card>
        </Col>
    );
};

export default SingleService;