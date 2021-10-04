import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { useHistory, useParams } from 'react-router';
import { ServiceContext } from '../MyRouter/MyRouter';
import './DetailedService.css';


const DetailedService = () => {
    const history = useHistory()
    const {id} = useParams();
    const service = useContext(ServiceContext)
    const detail =  service.find(ser => ser.id === parseInt(id))
    const {title,img,price,time,author,rating,video,des} = detail
    console.log(detail);
    const handleClick = () => {
        history.push('/services')
    }
    return (
        <Container className="my-5 fs-5">
            <Row className="align-items-center">
                <Col sm={6}>
                    <h3>Info :</h3>
                    <h1 className="title fw-bold">{title}</h1>
                    <p><span className="fw-bold">Description</span> : {des}</p>
                    <p><span className="fw-bold">Author</span> : {author}</p>
                    <p><span className="fw-bold">Price</span> : $ {price}</p>
                    <p><span className="fw-bold">Total time</span> : {time}</p>
                    <p><span className="fw-bold">Total Video</span>: {video}</p>
                    <p><span className="fw-bold">Rating</span> : <Rating
                                initialRating={rating}
                                readonly
                                className="rating"
                                emptySymbol="fa fa-star-o "
                                fullSymbol="fa fa-star"
                            /></p>
                    <button className="my-btn-1" onClick={handleClick}>Go Back</button>
                </Col>
                <Col sm={6}>
                    <img src={img} className="w-100 img-thumbnail" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default DetailedService;