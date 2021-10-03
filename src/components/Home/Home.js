import React from 'react';
import { Container } from 'react-bootstrap';
import HeroSection from '../HeroSection/HeroSection';
import Services from '../Services/Services';
import TeachingProcess from '../TeachingProcess/TeachingProcess';
import './home.css';


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