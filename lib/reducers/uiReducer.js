import * as types from './../actions/actionTypes';
import initialState from './initialState';

export default function uiReducer(state = initialState.ui, action) {
  switch(action.type) {
    case types.GET_JOKES_SUCCESS :
      return {
        ...state,
        jokesInFeed: [...state.jokesInFeed, ...action.jokes]
      };

    default :
      return state;
  }
}
