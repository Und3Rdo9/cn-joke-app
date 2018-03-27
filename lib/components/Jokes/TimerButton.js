import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as jokesActions from './../../actions/jokesActions';

export class TimerButton extends React.Component {

  render(){
    return (
      <button
        onClick={this.props.actions.toggleAutoAdd.bind(null, this.props.isActive)}
      >
        {this.props.isActive ? 'Stop adding new favorites every 5 seconds' : 'Add new favorite every 5 seconds!'}
      </button>
    );
  }
}

function mapStateToProps(state) {
  return {
    isActive: state.ui.autoAdding,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(jokesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerButton);
