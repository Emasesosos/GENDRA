import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters, getEpisodes } from './../helpers/fetch';
import { pageIni } from '../redux/actions/pages';
import { getData, makeRequestGeneral } from '../redux/actions/data';
import { Navbar } from './Navbar';
import { Toggle } from './Toggle/Toggle';
import { Paginacion } from './Paginacion/Paginacion';
import { Main } from './Main';

export const Home = () => {

    const dispatch = useDispatch();
    const paginas = useSelector(state => state.pageNow);
    const toggle = useSelector(state => state.searchType);
    const { pagePag } = paginas;
    const { searchType } = toggle;

    const typeData = useCallback(
        (searchType, results, pagePag, infoPages) => {
            dispatch(getData(searchType, results));
            dispatch(pageIni(pagePag, infoPages));
            return true;
        },
        [dispatch]
    );
    
    useEffect(() => {

        dispatch(makeRequestGeneral());
        
        const fetchData = async() => {

            if(searchType === 'C') {
                const characters = await getCharacters(pagePag);
                const { info, results } = characters;
                typeData(searchType, results, pagePag, info.pages);
            } else {
                let episodes;
                if(pagePag > 3) {
                    episodes = await getEpisodes(1);
                    const { info, results } = episodes;
                    typeData(searchType, results, 1, info.pages);
                } else {
                    episodes = await getEpisodes(pagePag);
                    const { info, results } = episodes;
                    typeData(searchType, results, pagePag, info.pages);
                }
            }
        };

        fetchData();

    }, [dispatch, pagePag, searchType, typeData]);

    return (
        <div className="home__container">            
            <Navbar />
            <Toggle />
            <Paginacion />
            <Main /> 
            <Paginacion />
        </div>
    );
    
};
