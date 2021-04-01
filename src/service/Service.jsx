import React from 'react';
import CardGrid from '../card/CardGrid';
import data from '../resources/cards-data';

const Service = () => {
    return <div>
        <div className="my-5">
            <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container mb-5">
            <CardGrid data={data} />
        </div>
        <img src="../images/example.png" alt="..." />
    </div>
}

export default Service;