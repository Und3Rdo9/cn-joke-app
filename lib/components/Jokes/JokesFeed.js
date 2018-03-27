import React from 'react';
import { connect } from 'react-redux';
import JokesList from './JokesList';

export class JokesFeed extends React.Component {

  render(){
    const { jokesInFeed, jokesData } = this.props;

    if(jokesInFeed && jokesInFeed.length && jokesData && Object.keys(jokesData).length) {
      return (
        <JokesList order={jokesInFeed} data={jokesData} hasControls={true} />
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

export default connect(mapStateToProps)(JokesFeed);
