import * as types from './../actions/actionTypes';
import initialState from './initialState';
import { formatJokeOrderArray } from './../selectors/selectors.js';

export default function uiReducer(state = initialState.ui, action) {
  switch(action.type) {
    case types.GET_JOKES_SUCCESS :
      return {
        ...state,
        jokesInFeed: [...state.jokesInFeed, ...(formatJokeOrderArray(action.jokes))]
      };

    default :
      return state;
  }
}
