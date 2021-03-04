import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Paginacion } from './Paginacion/Paginacion';
import { getCharacters } from './../helpers/fetch';
import { useDispatch, useSelector } from 'react-redux';
import { pageIni } from '../redux/actions/pages';

import { getData, makeRequestGeneral } from '../redux/actions/characters';
import { Toggle } from './Toggle/Toggle';

export const Home = () => {

    const dispatch = useDispatch();
    const paginas = useSelector(state => state.pageNow);
    const { pagePag } = paginas;

    useEffect(() => {

        dispatch(makeRequestGeneral());
        
        const fetchData = async() => {
            const characters = await getCharacters(pagePag);
            const { info, results } = characters;
            dispatch(getData(results));
            dispatch(pageIni(pagePag, info.pages));
        };

        fetchData();

    }, [pagePag,dispatch]);

    return (
        <div className="home__container">
            <Navbar />
            <Toggle />
            <Paginacion />
        </div>
    );
    
};
