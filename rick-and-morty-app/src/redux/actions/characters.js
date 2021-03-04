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

export const getData = (res) => {

    return {
        type: types.GET_DATA,
        payload: {
            characters: res,
            // info: res
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