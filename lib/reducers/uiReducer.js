import * as types from './../actions/actionTypes';
import initialState from './initialState';
import { formatJokeOrderArray, addJokeToFavoriteArray, removeJokeFromFavoriteArray } from './../selectors/selectors.js';
import union from 'lodash/union';

export default function uiReducer(state = initialState.ui, action) {
  switch(action.type) {
    case types.GET_JOKES_SUCCESS :
      return {
        ...state,
        jokesInFeed: union([...state.jokesInFeed], formatJokeOrderArray(action.jokes))
      };
    case types.FAVORITE_JOKE :
      return {
        ...state,
        favoriteJokes: addJokeToFavoriteArray(state.favoriteJokes, action.jokeId)
      };
    case types.UNFAVORITE_JOKE :
      return {
        ...state,
        favoriteJokes: removeJokeFromFavoriteArray(state.favoriteJokes, action.jokeId)
      };
    case types.TOGGLE_AUTO_ADD_JOKES :
      return {
        ...state,
        autoAdding: action.isActive
      };

    default :
      return state;
  }
}
