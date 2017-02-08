import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';


//marketing message for user
class Signout extends Component {
  componentWillMount() {
    //call action creator
    this.props.signoutUser();
  }

  render() {
    return <div>Sorry to see you go...</div>;
  }
}

export default connect(null, actions)(Signout);
