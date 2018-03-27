import React from 'react';
import { connect } from 'react-redux';
import JokesList from './JokesList';
import { bindActionCreators } from 'redux';
import * as jokesActions from './../../actions/jokesActions';

export class JokesFeed extends React.Component {

  render(){
    const { jokesInFeed, jokesData, favoriteJokes } = this.props;

    if(jokesInFeed && jokesInFeed.length && jokesData && Object.keys(jokesData).length) {
      return (
        <JokesList order={jokesInFeed} data={jokesData} hasControls={true} buttonAction={this.props.actions.checkBeforeFavoriteJoke} favoriteJokes={favoriteJokes}/>
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
    jokesInFeed: state.ui.jokesInFeed,
    favoriteJokes: state.ui.favoriteJokes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(jokesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JokesFeed);
