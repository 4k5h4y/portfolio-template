import React from 'react';
import web from '../images/home-image.svg';
import Common from '../common/Common';
const Home = () => {
    return <>
        <Common name="Grow your business with" imgSrc={web} visit="/service" btnName="Get started" />
    </>
}

export default Home;
