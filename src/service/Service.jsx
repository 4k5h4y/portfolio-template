import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../card/Card';
import web from '../images/home-image.svg';

const Service = () => {
    let i = 0;
    let max = 10;
    return <div>
        <div className="my-5">
            <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Service;