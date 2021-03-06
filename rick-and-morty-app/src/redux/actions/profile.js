import { types } from '../types/types';

export const profileInfo = () => {

    return {
        type: types.PROFILE_INFO
    };

};

export const getProfileInfo = (itemData) => {

    return {
        type: types.GET_PROFILE_INFO,
        payload: {
            itemInfo: itemData
        }
    };

};
