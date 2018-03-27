import * as types from './actionTypes';
import { getRandomJokes } from './../api/chuckApi';
import * as uiActions from './uiActions';
import config from './../config';
import { store } from './../components/Index';

export function getJokes(amount, type) {
  return function(dispatch) {
    dispatch(uiActions.startAJAXcall(type));
    return getRandomJokes(amount)
      .then( (response) => {
        dispatch(uiActions.endAJAXcall(type));
        dispatch(getJokesSuccess(response.data.value));
        if (type === 'autoJokeRequests') {
          dispatch(checkBeforeFavoriteJoke(response.data.value[0].id));
        }
      })
      .catch( (error) => {
        dispatch(uiActions.endAJAXcall(type));
        throw(error);
      });
  };
}

let interval = undefined;

export function toggleAutoAdd(isActive) {
  return function(dispatch) {
    dispatch(toggleAutoAddState(isActive));

    if (isActive === false ) {
      interval = setInterval(() => {
        dispatch(getJokes(1, 'autoJokeRequests'));
      }, config.autoAddInterval);
    }
    else if(isActive === true && interval){
      clearInterval(interval);
    }

  };
}

export function checkBeforeFavoriteJoke(jokeId) {
  const currentFavorites = store.getState().ui.favoriteJokes;
  return function(dispatch) {
    if (currentFavorites.length <= config.maxFavorites - 1 ) {
      dispatch(favoriteJoke(jokeId));
    }
    else {
      console.log('should not add');
      // dispatch an error message
    }
  };
}

export function toggleAutoAddState(isActive) {
  return { type: types.TOGGLE_AUTO_ADD_JOKES, isActive: !isActive };
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
