import React from 'react';
import { connect } from 'react-redux';
import JokesList from './JokesList';
import { bindActionCreators } from 'redux';
import * as jokesActions from './../../actions/jokesActions';

export class FavoriteJokes extends React.Component {

  render(){
    const { favoriteJokes, jokesData } = this.props;

    if(favoriteJokes && favoriteJokes.length && jokesData && Object.keys(jokesData).length) {
      return (
        <JokesList order={favoriteJokes} data={jokesData} actionType='unfavorite' buttonAction={this.props.actions.unfavoriteJoke} favoriteJokes={favoriteJokes} />
      );
    }
    return (
      <p>No favorite jokes added yet</p>
    );
  }
}

function mapStateToProps(state) {
  return {
    jokesData: state.jokes,
    favoriteJokes: state.ui.favoriteJokes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(jokesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteJokes);
