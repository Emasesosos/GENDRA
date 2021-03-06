import { types } from '../types/types';

const initialState = {
    itemInfo: [],
    loading: true
};

export function profileReducer(state = initialState, action) {

    switch (action.type) {
        case types.PROFILE_INFO:
            return {
                itemInfo: [],
                loading: true
            }
        case types.GET_PROFILE_INFO:
            return {
                ...state,
                itemInfo: action.payload.itemInfo,
                loading: false
            }
        default:
            return state; 
    }

}