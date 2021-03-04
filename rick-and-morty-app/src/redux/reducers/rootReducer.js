import { combineReducers } from 'redux';
import { charactersReducer } from './charactersReducer';
import { pageReducer } from './pageReducer';

export const rootReducer = combineReducers({
    characters: charactersReducer,
    pageNow: pageReducer,
});