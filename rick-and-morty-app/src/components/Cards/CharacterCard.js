import React from 'react';
import { Link } from 'react-router-dom';

export const CharacterCard = ({ character, id }) => {

    const { gender, location, name, origin, image, species, status } = character;

    return (
        <div className="card animate__animated animate__fadeIn" style={{width: '18rem'}}>
            <img className="card-img-top" src={image} alt={image}/>
            <div className="card-body">
                <Link to={`item/${id}`}><h5 className="card-title">{name}</h5></Link>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"> <p>Species: <span>{ species }</span></p></li>
                <li className="list-group-item"> <p>Status: <span>{ status }</span></p></li>
                <li className="list-group-item"> <p>Gender: <span>{ gender }</span></p></li>
                <li className="list-group-item"> <p>Origin: <span>{ origin.name }</span></p></li>
                <li className="list-group-item"> <p>Location: <span>{ location.name }</span></p></li>
            </ul>
        </div>
    );
};
