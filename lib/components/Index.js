import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './../store/configureStore';
import { Provider } from 'react-redux';

import JokesFeed from './Jokes/JokesFeed';
import LoadJokes from './Jokes/LoadJokes';

class App extends React.Component {
  state = {
    chuck: 'Norris'
  };

  render() {
    return(

      <main className="chuck-grid">
        <header>
          {/* Application header */}
          <h2>Hello {this.state.chuck}</h2>
        </header>
        <section>
          <JokesFeed />
        </section>
        <section>
          {/* Favorites Feed */}
        </section>

        <footer>
          <LoadJokes />
          {/* Timer button */}
        </footer>
      </main>
    );
  }
}

export default App;

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
