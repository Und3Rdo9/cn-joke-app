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
        <header className="chuck-grid__header">
          {/* Application header */}
          <h2>Hello {this.state.chuck}</h2>
        </header>
        <section className="chuck-grid__feed">
          <JokesFeed />
        </section>
        <section className="chuck-grid__favorites">
          {/* Favorites Feed */}
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, repellendus deserunt cupiditate totam placeat, alias quisquam tempore fugit enim iusto illum nam, animi aliquam. Quidem ducimus minima excepturi quae cum.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt blanditiis porro dignissimos ducimus quibusdam, natus odit atque facere laborum ipsa nostrum? Earum asperiores, sint deserunt possimus enim natus. Corrupti, sit!</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, porro, optio. Incidunt iusto itaque quia fugit optio ducimus, similique praesentium tenetur facere, corporis, consequuntur reprehenderit, vitae sapiente ullam voluptates quo.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium et, voluptate, illo dicta quisquam non cum iste consectetur ex iure saepe tenetur. Molestiae ipsam, officia tempore, deleniti laboriosam voluptas eligendi.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore velit alias voluptatum itaque ipsam nulla obcaecati culpa maxime eos doloremque saepe, recusandae, cum reprehenderit, quam quo odit porro quod dolores?</li>
          </ul>
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

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
