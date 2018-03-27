import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as jokesActions from './../../actions/jokesActions';

export class LoadJokes extends React.Component {

  render(){
    return (
      <button onClick={this.props.actions.getJokes.bind(null, 10, 'manualJokeRequests')} disabled={this.props.isLoading > 0}>Load 10 random jokes</button>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.ui.requests.manualJokeRequests,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(jokesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadJokes);
