import React from 'react';
import Common from '../common/Common';
import web from '../images/home-image.svg';
const About = () => {
    return <>
        <Common name="Welcome to about page" imgSrc={web} visit="/contact" btnName="Contact now" />
    </>
}

export default About;
