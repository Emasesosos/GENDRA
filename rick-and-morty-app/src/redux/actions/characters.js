import { types } from './../types/types';

export const makeRequestGeneral = () => {

    return {
        type: types.MAKE_REQUEST_GENERAL
    };

};

export const makeRequestParams = () => {

    return {
        type: types.MAKE_REQUEST_PARAMS
    };

};

export const getData = (searchType, res) => {

    if(searchType === 'C') {

        return {
            type: types.GET_DATA,
            payload: {
                characters: res,
                episodes: []
            }
        };

    } else {

        return {
            type: types.GET_DATA,
            payload: {
                characters: [],
                episodes: res
            }
        };

    }

};

export const getDataParams = (res) => {

    return {
        type: types.GET_DATA_PARAMS,
        payload: {
            characters: res,
            episodes: []
        }
    };    

};

export const errorGetData = (e) => {

    return {
        type: types.ERROR,
        payload: {
            error: e
        }
    };

};

