import React from 'react';
import he from 'he';

export default class JokesList extends React.PureComponent {

  render () {
    return (
      <li>{he.decode(this.props.joke.joke)}</li>
    );
  }
}
