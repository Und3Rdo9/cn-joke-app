import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './../store/configureStore';
import { Provider } from 'react-redux';

import JokesFeed from './Jokes/JokesFeed';
import FavoriteJokes from './Jokes/FavoriteJokes';
import LoadJokes from './Jokes/LoadJokes';

import initialState from './../reducers/initialState';
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
          {/* Timer button */}
        </footer>
      </main>
    );
  }
}

export default App;

console.log(lStorage);

lStorage.persistState(JSON.stringify({
  jokes: {
    137: {
      categories: [],
      id: 37,
      joke: "Tom Clancy has to pay royalties to Chuck Norris because &quot;The Sum of All Fears&quot; is the name of Chuck Norris' autobiography."
    }
  },
  ui: {
    requests: {
      jokes: 0,
      manualJokeRequests: 0,
      autoJokeRequests: 0
    },
    favoriteJokes: [137],
    jokesInFeed: [137],
    autoAdding: false
  }
}));
const persistedState = JSON.parse(lStorage.getPersistedState());
const store = configureStore(persistedState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
