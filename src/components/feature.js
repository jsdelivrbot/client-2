import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessage } from '../actions/index';


class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage()
  }
  render() {
    return (
      <div>
        I am a feature
      </div>
    )
  }
}

 export default connect(null, { fetchMessage })(Feature);
