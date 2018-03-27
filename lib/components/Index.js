import React from 'react';
import ReactDOM from 'react-dom';

import { store } from './../store/store';
import { Provider } from 'react-redux';

import JokesFeed from './Jokes/JokesFeed';
import FavoriteJokes from './Jokes/FavoriteJokes';
import LoadJokes from './Jokes/LoadJokes';
import TimerButton from './Jokes/TimerButton';

import './../styles/styles.css';
import './../../node_modules/toastr/build/toastr.min.css';

class App extends React.Component {

  render() {
    return(
      <main className="chuck-grid">
        <header className="chuck-grid__header">
          <h1 className="text-center">Chuck Norris&apos; Ass-kicking Joke Application</h1>
        </header>
        <section className="chuck-grid__feed">
          <JokesFeed />
        </section>
        <section className="chuck-grid__favorites">
          <FavoriteJokes />
        </section>

        <footer className="chuck-grid__footer">
          <div className="button-group">
            <LoadJokes />
            <TimerButton />
          </div>
        </footer>
      </main>
    );
  }
}

export default App;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
