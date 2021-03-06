import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageIni, pageIniParams, pageNext, pagePrev } from '../../redux/actions/pages';

export const Paginacion = () => {

    const dispatch = useDispatch();

    const data = useSelector(state => state.data);
    const paginas = useSelector(state => state.pageNow);

    const { characters, episodes } = data;
    const { pagePag, totalPages } = paginas;

    if(!characters || !episodes) return null;

    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const handlePageBack = (amount) => {
        dispatch(pagePrev(amount));
    };

    const handlePageIni = (amount, totalPages) => {
        dispatch(pageIni(amount, totalPages));
        dispatch(pageIniParams(amount, totalPages));
    };

    const handlePageNext = (amount) => {
        dispatch(pageNext(amount));
    };

    return (
        <div className="paginacion__contenedor">
            <ul className="paginacion">
                { pagePag !== 1 && <li className="material-icons pag" onClick={ () => handlePageBack(-1)} >keyboard_arrow_left</li> }
                { pagePag !== 1 && <li className="pag" onClick={ () => handlePageIni(1, totalPages)} >1</li> }
                { pagePag > 2 && <li className="pag" onClick={ () => handlePageBack(-1)} >{pagePag - 1}</li> }
                <li className="pag active">{ pagePag }</li>
                { (pagePag > 2 && pagePag <= pageNumbers.length - 1) && <li className="pag"> . . . </li> }
                { pageNumbers[pagePag] && <li className="pag" onClick={ () => handlePageNext(1)} >{ pagePag + 1  }</li> }
                { pageNumbers[pagePag] && <li className="material-icons paginacion__next pag" onClick={ () => handlePageNext(1)} >keyboard_arrow_right</li> }
            </ul>
        </div>
    );
    
};
