import { combineReducers } from 'redux';
import jokesReducer from './jokesReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  jokes : jokesReducer,
  ui: uiReducer
});

export default rootReducer;
