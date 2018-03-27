import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './../store/configureStore';
import { Provider } from 'react-redux';

import JokesFeed from './Jokes/JokesFeed';
import FavoriteJokes from './Jokes/FavoriteJokes';
import LoadJokes from './Jokes/LoadJokes';
import TimerButton from './Jokes/TimerButton';

import throttle from 'lodash/throttle';
import * as lStorage from './../utilities/localStorage';

class App extends React.Component {
  state = {
    chuck: 'Norris'
  };

  render() {
    return(
      <main className="chuck-grid">
        <header className="chuck-grid__header">
          {/* Application header */}
          <h2>Hello {this.state.chuck}</h2>
        </header>
        <section className="chuck-grid__feed">
          <JokesFeed />
        </section>
        <section className="chuck-grid__favorites">
          <FavoriteJokes />
        </section>

        <footer className="chuck-grid__footer">
          <LoadJokes />
          <TimerButton />
        </footer>
      </main>
    );
  }
}

export default App;

const persistedState = lStorage.getPersistedState();
export const store = configureStore(persistedState);

store.subscribe(throttle(() => {
  lStorage.persistState(store.getState());
}, 1000));



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
