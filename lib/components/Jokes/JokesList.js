import React from 'react';
import Joke from './Joke';

export default class JokesList extends React.PureComponent {

  renderJokes(order, data, actionType, buttonAction, favoriteJokes) {
    if(order && order.length) {
      return order.map( (joke) => {
        return (<Joke joke={data[joke]} key={joke} actionType={actionType} buttonAction={buttonAction} favoriteJokes={favoriteJokes} />);
      });
    }
  }

  render () {
    return (
      <ul className="joke-list">
        {this.renderJokes(this.props.order, this.props.data, this.props.actionType, this.props.buttonAction, this.props.favoriteJokes)}
      </ul>
    );
  }
}
