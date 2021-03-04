import { types } from './../types/types';

const initialState = {
    searchType: 'C'
};

export function toggleReducer(state = initialState, action) {

    switch (action.type) {
        case types.TOGGLE_CHANGE:
            return {
                ...state,
                searchType: action.payload.searchType
            }
        default:
            return state;
    }

}