import React from 'react';

export const Navbar = () => {
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
                    // onSubmit={ handleSearch }
                >
                    <div className="form__container">
                        <input 
                            type="text"
                            name="characterEpisode"
                            placeholder="Character or number of episode..."
                            autoComplete="off"
                            // onChange={ handleInputChange }
                            // value={ characterEpisode }
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
