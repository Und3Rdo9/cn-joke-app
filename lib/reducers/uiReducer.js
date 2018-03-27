import * as types from './../actions/actionTypes';
import initialState from './initialState';
import { formatJokeOrderArray, addJokeToFavoriteArray, removeJokeFromFavoriteArray } from './../selectors/selectors.js';
import union from 'lodash/union';

export default function uiReducer(state = initialState.ui, action) {
  let currentRequests = state.requests[action.label];
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
    case types.START_AJAX_CALL :
      return {
        ...state,
        requests: {
          ...state.requests, [action.label]: currentRequests + 1
        }
      };
    case types.END_AJAX_CALL :
      return {
        ...state,
        requests: {
          ...state.requests, [action.label]: currentRequests - 1
        }
      };

    default :
      return state;
  }
}
