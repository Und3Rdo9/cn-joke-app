import * as types from './../actions/actionTypes';
import initialState from './initialState';
import { updateObject, mapArrayIntoObject } from './../utilities/utilities';

export default function jokesReducer(state = initialState.jokes, action) {
  switch(action.type) {
    case types.GET_JOKES_SUCCESS :
      return updateObject(state, mapArrayIntoObject(action.jokes));
    default :
      return state;
  }
}
