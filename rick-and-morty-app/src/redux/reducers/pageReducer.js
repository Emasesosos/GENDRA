import { types } from './../types/types';

const initialState = {
    pagePag: 1,
    pagePagParams: 1,
    totalPages: 0
};

export function pageReducer(state = initialState, action) {

    switch (action.type) {
        case types.PAGE_PREV:
            return {
                ...state,
                pagePag: state.pagePag + action.payload.pagePag
            }
        case types.PAGE_NEXT:
            {
                return {
                    ...state,
                    pagePag: state.pagePag + action.payload.pagePag
                }
            }
        case types.PAGE_INI:
            {
                return {
                    ...state,
                    pagePag: action.payload.pagePag,
                    totalPages: action.payload.totalPages
                }
            }
        case types.PAGE_INI_PARAMS:
            {
                return {
                    ...state,
                    pagePagParams: action.payload.pagePagParams,
                    totalPages: action.payload.totalPages
                }
            }
        default:
            return state;
    }

}