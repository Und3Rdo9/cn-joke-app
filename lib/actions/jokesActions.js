import * as types from './actionTypes';
import { getRandomJokes } from './../api/chuckApi';

export function getJokes(amount) {
  return function(dispatch) {
    return getRandomJokes(amount)
      .then( (response) => {
        dispatch(getJokesSuccess(response.data.value));
      })
      .catch( (error) => {
        throw(error);
      });
  };
}

export function getJokesSuccess(jokes) {
  return { type: types.GET_JOKES_SUCCESS, jokes };
}
