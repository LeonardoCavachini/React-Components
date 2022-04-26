import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../helper/updateObject';

const INITIAL_STATE = {
  pokemon: { },
};

const fetchPokemonSuccess = (state: object, action: any) => {
    return updateObject(state, {
      pokemon: action.pokemon,
    });
  };

const reducer = (state:any = INITIAL_STATE, action: any) => {
switch (action.type) {
    case actionTypes.POKEMON_SUCCESS: return fetchPokemonSuccess(state, action);

    default:
    return state
}
}

  export default reducer