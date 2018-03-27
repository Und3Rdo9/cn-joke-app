import * as types from './actionTypes';
import { getRandomJokes } from './../api/chuckApi';
import * as uiActions from './uiActions';
import config from './../config';

export function getJokes(amount, type) {
  return function(dispatch) {
    dispatch(uiActions.startAJAXcall(type));
    return getRandomJokes(amount)
      .then( (response) => {
        dispatch(uiActions.endAJAXcall(type));
        dispatch(getJokesSuccess(response.data.value));
      })
      .catch( (error) => {
        dispatch(uiActions.endAJAXcall(type));
        throw(error);
      });
  };
}

export function checkBeforeFavoriteJoke(jokeId, favoriteJokes) {
  return function(dispatch) {
    if (favoriteJokes.length <= config.maxFavorites ) {
      dispatch(favoriteJoke(jokeId));
    }
    else {
      console.log('should not add');
      // dispatch an error message
    }
  };
}

export function favoriteJoke(jokeId) {
  return { type: types.FAVORITE_JOKE, jokeId };
}

export function unfavoriteJoke(jokeId) {
  return { type: types.UNFAVORITE_JOKE, jokeId };
}

export function getJokesSuccess(jokes) {
  return { type: types.GET_JOKES_SUCCESS, jokes };
}
