import * as types from './../actions/actionTypes';
import initialState from './initialState';
import { formatJokeOrderArray, addJokeToFavoriteArray, removeJokeFromFavoriteArray } from './../selectors/selectors.js';

export default function uiReducer(state = initialState.ui, action) {
  switch(action.type) {
    case types.GET_JOKES_SUCCESS :
      return {
        ...state,
        jokesInFeed: [...state.jokesInFeed, ...(formatJokeOrderArray(action.jokes))]
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

    default :
      return state;
  }
}
