import React from 'react';
import Joke from './Joke';

export default class JokesList extends React.PureComponent {

  renderJokes(order, data) {
    if(order && order.length) {
      return order.map( (joke) => {
        return (<Joke joke={data[joke.id]} key={joke.id} />);
      });
    }
  }

  render () {
    return (
      <ul className="joke-list">
        {this.renderJokes(this.props.order, this.props.data)}
      </ul>
    );
  }
}
