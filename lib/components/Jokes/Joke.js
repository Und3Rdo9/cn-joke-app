import React from 'react';
import he from 'he';

export default class JokesList extends React.PureComponent {

  isFavorite(favorites, jokeId) {
    return favorites.includes(jokeId);
  }

  render () {
    return (

      <li className="joke">
        <button className="joke__add" onClick={this.props.buttonAction.bind(this, this.props.joke.id, this.props.favoriteJokes)}>
          {this.props.actionType === 'favorite'
            ?
            <svg className={this.isFavorite(this.props.favoriteJokes, this.props.joke.id) ? 'joke__add-icon--added joke__add-icon' : 'joke__add-icon' } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z"/></svg>
            :
            <svg className="joke__add-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon fill="#010101" points="77.6,21.1 49.6,49.2 21.5,21.1 19.6,23 47.6,51.1 19.6,79.2 21.5,81.1 49.6,53 77.6,81.1 79.6,79.2   51.5,51.1 79.6,23 "/></svg>
          }
        </button>
        <span className="joke__text">
          {this.props.joke.id} -
          {he.decode(this.props.joke.joke)}
        </span>
      </li>
    );
  }
}
