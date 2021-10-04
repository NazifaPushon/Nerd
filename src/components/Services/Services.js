import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { ServiceContext } from '../MyRouter/MyRouter';
import SingleService from '../SingleService/SingleService';
import UnderLine from '../Underline/UnderLine';

// Service components that rendered single Service
const Services = props => {
    const {isLimited} = props
    const services = useContext(ServiceContext)
    return (
        <Container>
            <h1 className="text-center mt-3 fw-bold">Our Services </h1>
            <UnderLine/>
            <Row xs={1} md={3} className="g-4 mt-3 mb-5">
                {
                    isLimited ? services.slice(0,4).map(service => <SingleService key={service.id} data={service}/>) : services.map(service => <SingleService key={service.id} data={service}/>)
                }
            </Row>
        </Container>
    );
};

export default Services;