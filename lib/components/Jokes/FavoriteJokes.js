import React from 'react';
import { connect } from 'react-redux';
import JokesList from './JokesList';

export class FavoriteJokes extends React.Component {

  render(){
    const { favoriteJokes, jokesData } = this.props;

    if(favoriteJokes && favoriteJokes.length && jokesData && Object.keys(jokesData).length) {
      return (
        <JokesList order={favoriteJokes} data={jokesData} hasControls={false} buttonAction={() => {/* no op */ }} favoriteJokes={favoriteJokes} />
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

export default connect(mapStateToProps)(FavoriteJokes);
