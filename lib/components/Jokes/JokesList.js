import React from 'react';
import { connect } from 'react-redux';

export class JokesList extends React.Component {

  renderJokes(jokesArray, jokesData) {
    return jokesArray.map( (joke) => {
      return (
        <p key={joke.id}>{jokesData[joke.id].joke}</p>
      );
    });
  }

  render(){
    const { jokesInFeed, jokesData } = this.props;

    if(jokesInFeed && jokesInFeed.length && jokesData && Object.keys(jokesData).length) {
      return (
        <div>{this.renderJokes(jokesInFeed, jokesData)}</div>
      );
    }
    return (
      <p>No jokes found..</p>
    );
  }
}

function mapStateToProps(state) {
  return {
    jokesData: state.jokes,
    jokesInFeed: state.ui.jokesInFeed
  };
}

export default connect(mapStateToProps)(JokesList);
