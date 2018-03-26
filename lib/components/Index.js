import React from 'react';
import ReactDOM from 'react-dom';

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
          {/* Joke Feed */}
        </section>
        <section>
          {/* Favorites Feed */}
        </section>

        <footer>
          {/* Timer button */}
        </footer>
      </main>
    );
  }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
