import { types } from '../types/types';

const initialState = {
    characters: [],
    episodes: [],
    loading: true
};

export function dataReducer(state = initialState, action) {

    switch (action.type) {
        case types.MAKE_REQUEST_GENERAL:
            return {
                characters: [],
                episodes: [],
                loading: true
            }
        case types.MAKE_REQUEST_PARAMS:
            return {
                characters: [],
                episodes: [],
                loading: true
            }
        case types.GET_DATA:
            return {
                ...state,
                characters: action.payload.characters,
                episodes: action.payload.episodes,
                loading: false
            }
        case types.GET_DATA_PARAMS:
            return {
                ...state,
                characters: action.payload.characters,
                episodes: action.payload.episodes,
                loading: false
            }
        case types.ERROR:
            return {
                ...state,
                characters: [],
                episodes: [],
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }

}