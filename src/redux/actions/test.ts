import * as actionTypes from './actionTypes';

//import { toastr } from 'react-redux-toastr'
import axios from 'axios';

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/"
  });

export const fetchPokemonSuccess = (pokemon: String) => {
    return {
      type: actionTypes.POKEMON_SUCCESS,
      pokemon: pokemon
    };
  };
  
  export const fetchPokemon = (name:string) => {
    return (dispatch: any) => {
      return new Promise((resolve, reject) => {
        api.get(`${name}`).then(res => {
          resolve(res.data);
          dispatch(fetchPokemonSuccess(res.data));
        }).catch(err => {
          reject(err);
        });
      });
    }
  };