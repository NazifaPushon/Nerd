import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './singleService.css';
// Single Service Shower components
const SingleService = (props) => {
    const {title,img,price,time,author,rating,video,des} = props.data;
    const [showDetail,setShowDetail] = useState(false)
    const handleClick = () => {
       const newVal = !showDetail;
       setShowDetail(newVal)
    }
    
    
    return (
        <Col>
            {/* card start */}
            <Card className="my-card shadow border-0">
                <Card.Img variant="top" src={img} style={{height:"15rem"}} />
                <Card.Body className="fs-5">
                    <Card.Title className="fs-4 fw-bold">{title}</Card.Title>
                    <p>Author {author}</p>
                    <p>Price : $ <span className="price">{price}</span> </p>
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
                <Card.Footer className="text-center card-footer ">
                        <button onClick={handleClick} className="my-btn-2 m-0"> See {
                            showDetail ? 'Less' : 'More'
                        }
                        </button>
                        {
                            showDetail && <p className="py-2">{des}</p>
                        }
                </Card.Footer>
            </Card>
            {/* card end */}
        </Col>
    );
};

export default SingleService;