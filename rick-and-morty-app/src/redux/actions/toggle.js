import { types } from './../types/types';

export const changeSearch = (type) => {

    return {
        type: types.TOGGLE_CHANGE,
        payload: {
            searchType: type
        }
    };

};

