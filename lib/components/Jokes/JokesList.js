import React from 'react';
import Joke from './Joke';

export default class JokesList extends React.PureComponent {

  renderJokes(order, data, hasControls) {
    if(order && order.length) {
      return order.map( (joke) => {
        return (<Joke joke={data[joke]} key={joke} hasControls={hasControls} />);
      });
    }
  }

  render () {
    return (
      <ul className="joke-list">
        {this.renderJokes(this.props.order, this.props.data, this.props.hasControls)}
      </ul>
    );
  }
}
