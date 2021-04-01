import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
    let data = props.data;
    return <div className="card">
        <img src={data.imgSrc} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.description}</p>
            <NavLink to={data.btnData.navlink} className="btn btn-primary">{data.btnData.name}</NavLink>
        </div>
    </div>
}

export default Card;