import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearch } from '../../redux/actions/toggle';

export const Toggle = () => {

    const toggle = useSelector(state => state.searchType);
    const { searchType } = toggle;
    const dispatch = useDispatch();

    const handleToggle = () => {
        if(searchType === 'C') {
            dispatch(changeSearch('E'));
        } else {
            dispatch(changeSearch('C'));
        }
    }; 
    
    return (
        <div className="toggle__container">
            <div className="toggle__slider">
                <p>Characters</p>
                <label className="switch">
                    <input 
                        type="checkbox"
                        onChange={ handleToggle }
                    />
                    <span className="slider round"></span>
                </label>
                <p>Episodes</p>
            </div>
        </div>
    );
};
