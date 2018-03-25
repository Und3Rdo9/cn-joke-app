import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    chuck: 'Norris'
  };

  render() {
    return(
      <h2>Hello {this.state.chuck}</h2>
    );
  }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
