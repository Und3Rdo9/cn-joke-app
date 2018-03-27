import configureStore from './configureStore';
import throttle from 'lodash/throttle';
import * as lStorage from './../utilities/localStorage';

const persistedState = lStorage.getPersistedState();
export const store = configureStore(persistedState);

store.subscribe(throttle(() => {
  lStorage.persistState(store.getState());
}, 1000));
