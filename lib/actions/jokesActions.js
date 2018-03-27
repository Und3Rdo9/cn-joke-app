import * as types from './actionTypes';
import { getRandomJokes } from './../api/chuckApi';
import * as uiActions from './uiActions';
import config from './../config';
import { store } from './../store/store';
import toastr from 'toastr';

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
        toastr.error('Something went wrong: Chuck will punch the ones responsible in the face');
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
      toastr.warning('Favorite limit reached: Chuck only allows 10 favorites, so choose wisely.');
    }
  };
}

export function toggleAutoAddState(isActive) {
  const state = !isActive ? 'on' : 'off';
  toastr.info(`Automatically favoriting jokes turned ${state}`);
  return { type: types.TOGGLE_AUTO_ADD_JOKES, isActive: !isActive };
}

export function favoriteJoke(jokeId) {
  toastr.success('Successfully favorited joke: Chuck admires your taste...');
  return { type: types.FAVORITE_JOKE, jokeId };
}

export function unfavoriteJoke(jokeId) {
  toastr.info('Successfully unfavorited joke.');
  return { type: types.UNFAVORITE_JOKE, jokeId };
}

export function getJokesSuccess(jokes) {
  toastr.success(`Successfully fetched ${jokes.length} joke(s). You make Chuck proud, son!`);
  return { type: types.GET_JOKES_SUCCESS, jokes };
}
