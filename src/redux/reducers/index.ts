import { combineReducers } from 'redux';

import pokeReducer from './test';


export const appReducer = combineReducers({
  pokemon: pokeReducer,
});

export type RootState = ReturnType<typeof appReducer>