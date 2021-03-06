import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProfileInfo, profileInfo } from '../../redux/actions/profile';

export const Profile = (props) => {

    const dispatch = useDispatch();
    const { itemId } = (props.match.params);
    console.log(itemId);
    const { characters } = useSelector(state => state.data);

    let findCharacter;

    if(characters.length > 0) {
        findCharacter = characters.find(character => character.id === +itemId);
        dispatch(profileInfo());
        dispatch(getProfileInfo(findCharacter));
    } else {
        return null;
    }
    
    const { name, image } = findCharacter;


    return (
            
        <div className="profile__container">
            <div className="profile__hero"></div>
            <div className="profile__main animate__animated animate__fadeIn">
                <div className="card mb-3" style={{maxWidth: '720px'}}>
                    <div className="row no-gutters">
                        <div class="col-md-4">
                            <img src={image} class="card-img" alt={image} />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">{name}</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum optio ea laborum beatae deserunt consequuntur ex nobis veritatis voluptatem similique dolore</p>
                            </div>
                            <div className="card-body">
                                <Link to={`/`} className="card-link">Back Home</Link>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>  
        </div>
    
    );

};
