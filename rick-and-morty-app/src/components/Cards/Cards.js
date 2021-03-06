import React from 'react';
import { useSelector } from 'react-redux';
import { Spinner } from '../Spinner/Spinner';
import { CharacterCard } from './CharacterCard';
import { EpisodeCard } from './EpisodeCard';

export const Cards = () => {

    const data = useSelector(state => state.data);
    const { characters, episodes } = data;

    return (
        <div className="cards__container">
            {
                characters.length > 0 
                    ?   characters.map((character, i) => {
                            return <CharacterCard 
                                        key= {i}
                                        character={ character }
                                        id={ character.id }
                                    />
                        }) : episodes.length > 0 
                            ? episodes.map((episode, i) => {
                                return <EpisodeCard 
                                            key={ i }
                                            episode={ episode }
                                            id={ episode.id }
                                        />
                                }) : <Spinner />
            }
        </div>
    );
    
};
