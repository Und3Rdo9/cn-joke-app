import React from 'react';
import { connect } from 'react-redux';
import JokesList from './JokesList';
import { bindActionCreators } from 'redux';
import * as jokesActions from './../../actions/jokesActions';

export class FavoriteJokes extends React.Component {

  constructor() {
    super();
    this.renderJokeList = this.renderJokeList.bind(this);
  }

  renderJokeList(favoriteJokes, jokesData) {
    if (favoriteJokes && favoriteJokes.length && jokesData && Object.keys(jokesData).length) {
      return (
        <JokesList
          order={favoriteJokes}
          data={jokesData}
          actionType='unfavorite'
          buttonAction={this.props.actions.unfavoriteJoke}
          favoriteJokes={favoriteJokes}
        />
      );
    }
    else {
      return (
        <p className="text-center">No favorite jokes added yet</p>
      );
    }
  }

  render(){
    const { favoriteJokes, jokesData } = this.props;

    return (
      <div>
        <div className="section-header">
          <img
            className="section-header__image"
            src="https://i.pinimg.com/originals/13/f4/09/13f4093020fc96ba87eae8221d071af7.jpg"
            alt="Chuck Approved"
          />
          <h2 className="section-header__title">Favorite Jokes ({favoriteJokes.length})</h2>
        </div>
        {this.renderJokeList(favoriteJokes, jokesData)}
      </div>
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
