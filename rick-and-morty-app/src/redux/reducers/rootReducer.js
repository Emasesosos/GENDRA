import { combineReducers } from 'redux';
import { toggleReducer } from './toggleReducer';
import { dataReducer } from './dataReducer';
import { pageReducer } from './pageReducer';
import { profileReducer } from './profileReducer';

export const rootReducer = combineReducers({
    searchType: toggleReducer,
    data: dataReducer,
    pageNow: pageReducer,
    itemProfile: profileReducer,
});