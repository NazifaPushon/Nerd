import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../Hooks/useServices';
import SingleService from '../SingleService/SingleService';
import UnderLine from '../Underline/UnderLine';

const Services = props => {
    const {isLimited} = props
    const [services] = useServices()
    return (
        <Container>
            <h1 className="text-center">this is services</h1>
            <UnderLine/>
            <Row xs={1} md={3} className="g-4 my-3">
                {
                    isLimited ? services.slice(0,4).map(service => <SingleService key={service.id} data={service}/>) : services.map(service => <SingleService key={service.id} data={service}/>)
                }
            </Row>
        </Container>
    );
};

export default Services;