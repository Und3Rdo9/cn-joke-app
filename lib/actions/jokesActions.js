import * as types from './actionTypes';
import { getRandomJokes } from './../api/chuckApi';
import * as uiActions from './uiActions';

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

export function getJokesSuccess(jokes) {
  return { type: types.GET_JOKES_SUCCESS, jokes };
}
