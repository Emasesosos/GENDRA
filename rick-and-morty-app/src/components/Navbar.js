import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchParams } from '../helpers/fetch';
import useForm from '../hooks/useForm';
import { getDataParams, makeRequestParams } from '../redux/actions/characters';
import { pageIniParams } from '../redux/actions/pages';

export const Navbar = () => {

    const dispatch = useDispatch();
    const paginas = useSelector(state => state.pageNow);
    const { pagePagParams } = paginas;

    const typeData = useCallback(
        (results, pagePagParams, infoPages) => {
            dispatch(getDataParams(results));
            dispatch(pageIniParams(pagePagParams, infoPages));
            return true;
        },
        [dispatch]
    );

    const [ formValues, handleInputChange, reset ] = useForm({
        characterEpisode: '',
    });

    const { characterEpisode } = formValues;

    const handleSearch = async (e) => {
        e.preventDefault();
        if(!characterEpisode) {
            return;
        }
        console.log({characterEpisode});
        dispatch(makeRequestParams());
        const character = await getSearchParams(pagePagParams, characterEpisode);
        const { info, results } = character;
        console.log({info});
        console.log({results});
        typeData(results, pagePagParams, info.pages);
        reset();
    };

    return (
        <nav className="navbar__container">
            <div className="navbar__main">
                <div className="navbar__title">
                    <a href="/">Rick and Morty</a>
                </div>
                {/*<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="/">Home</a>
                    </div>
                </div>*/}
            </div>
            <div className="navbar__form">
                <form
                    className=""
                    onSubmit={ handleSearch }
                >
                    <div className="form__container">
                        <input 
                            type="text"
                            name="characterEpisode"
                            placeholder="Character or number of episode..."
                            autoComplete="off"
                            onChange={ handleInputChange }
                            value={ characterEpisode }
                        />
                        <button
                            type="submit"
                        >
                            <i className="material-icons">search</i>
                        </button>
                    </div>
                </form>
            </div>
        </nav>
    );
};
