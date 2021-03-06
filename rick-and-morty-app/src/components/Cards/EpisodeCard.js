import React from 'react';
import RickAndMorty from './../../assets/img/Rick-Morty.jpg';

export const EpisodeCard = ( {episode} ) => {

    const { air_date, episode: cap, id, name } = episode;

    return (
        <div className="card animate__animated animate__fadeIn" style={{width: '18rem'}}>
            <div className="episodeCard__number-episode">
                <p>{ id }</p>
                <img className="card-img-top" src={ RickAndMorty } alt={ RickAndMorty }/>
            </div>
            <div className="card-body">
                <h5 className="card-title">{ name }</h5>
                <p>{ cap }</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{air_date}</li>
            </ul>
        </div>
    );

};
