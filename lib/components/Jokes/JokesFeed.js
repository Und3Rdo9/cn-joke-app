import React from 'react';
import { connect } from 'react-redux';
import JokesList from './JokesList';
import { bindActionCreators } from 'redux';
import * as jokesActions from './../../actions/jokesActions';
import Loader from './../../images/loader.svg';

export class JokesFeed extends React.Component {

  constructor() {
    super();
    this.renderJokeList = this.renderJokeList.bind(this);
  }

  renderJokeList(jokesInFeed, jokesData, favoriteJokes, isLoading) {
    if (jokesInFeed && jokesInFeed.length && jokesData && Object.keys(jokesData).length) {
      return (
        <JokesList
          order={jokesInFeed}
          data={jokesData}
          actionType='favorite'
          buttonAction={this.props.actions.checkBeforeFavoriteJoke} favoriteJokes={favoriteJokes}
        />
      );
    }
    else if (isLoading > 0){
      return (
        <div className="center-block">
          <Loader />
        </div>
      );
    }
    else {
      return (
        <p className="text-center">No jokes found.. Go fetch some damn jokes, son!</p>
      );
    }
  }

  render(){
    const { jokesInFeed, jokesData, favoriteJokes, isLoading } = this.props;

    return (
      <div>
        <div className="section-header">
          <img
            className="section-header__image"
            src="https://www.menosfios.com/wp-content/uploads/2013/11/5.jpg"
            alt="Chuck"
          />
          <h2 className="section-header__title">Chuck&apos;s <del style={{'textDecoration': 'line-through'}}>Joke</del> <ins>Fact</ins> Feed</h2>
        </div>
        {this.renderJokeList(jokesInFeed, jokesData, favoriteJokes, isLoading)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    jokesData: state.jokes,
    jokesInFeed: state.ui.jokesInFeed,
    favoriteJokes: state.ui.favoriteJokes,
    isLoading: state.ui.requests.manualJokeRequests
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(jokesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JokesFeed);
