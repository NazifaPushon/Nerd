import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import img from '../../images/notFound.jpg';

// Not Found Component
const NotFound = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/home')
    }
    return (
        <Container className="my-5">
            <div className="w-75 mx-auto text-center">
                <img src={img} alt="" className="w-75"/>
                <h1 className="display-4">Page Not Found</h1>
                <button className="my-btn-1" onClick={handleClick}>Back to Home</button>
            </div>
        </Container>
    );
};

export default NotFound;