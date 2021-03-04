import { combineReducers } from 'redux';
import { toggleReducer } from './toggleReducer';
import { charactersReducer } from './charactersReducer';
import { pageReducer } from './pageReducer';

export const rootReducer = combineReducers({
    searchType: toggleReducer,
    characters: charactersReducer,
    pageNow: pageReducer,
});