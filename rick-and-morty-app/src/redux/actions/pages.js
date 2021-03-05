import { types } from './../types/types';

export const pagePrev = (amount) => {

    return {
        type: types.PAGE_PREV,
        payload: {
            pagePag: amount
        }
    };

};

export const pageNext = (amount) => {

    return {
        type: types.PAGE_NEXT,
        payload: {
            pagePag: amount
        }
    };

};

export const pageIni = (amount, totalPages) => {

    return {
        type: types.PAGE_INI,
        payload: {
            pagePag: amount,
            totalPages: totalPages
        }
    };

};

export const pageIniParams = (amount, totalPages) => {

    return {
        type: types.PAGE_INI_PARAMS,
        payload: {
            pagePagParams: amount,
            totalPages: totalPages
        }
    };

};