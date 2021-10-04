import React from 'react';
import { Container } from 'react-bootstrap';
import HeroSection from '../HeroSection/HeroSection';
import Services from '../Services/Services';
import TeachingProcess from '../TeachingProcess/TeachingProcess';

// home Component that wrap up 3 componets
const Home = () => {
    return (
        <Container>
            <HeroSection/>
            <TeachingProcess/>
            <Services isLimited={true}/>
        </Container>
    );
};

export default Home;