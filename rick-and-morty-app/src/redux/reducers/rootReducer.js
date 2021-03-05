import { combineReducers } from 'redux';
import { toggleReducer } from './toggleReducer';
import { dataReducer } from './dataReducer';
import { pageReducer } from './pageReducer';

export const rootReducer = combineReducers({
    searchType: toggleReducer,
    data: dataReducer,
    pageNow: pageReducer,
});