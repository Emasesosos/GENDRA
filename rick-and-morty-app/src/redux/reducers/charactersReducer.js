import { types } from './../types/types';

const initialState = {
    characters: [],
    loading: true
};

export function charactersReducer(state = initialState, action) {

    switch (action.type) {
        case types.MAKE_REQUEST_GENERAL:
            return {
                characters: [],
                loading: true
            }
        case types.MAKE_REQUEST_PARAMS:
            return {
                characters: [],
                loading: true
            }
        case types.GET_DATA:
            return {
                ...state,
                characters: action.payload.characters,
                loading: false
            }
        case types.ERROR:
            return {
                ...state,
                characters: [],
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }

}