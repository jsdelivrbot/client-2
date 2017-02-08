import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { signinUser } from '../../actions/index';
import { connect } from 'react-redux';

class Signin extends Component {
  onSubmit({ email, password }) {
    //console.log(email, password);
    //call action creator
    this.props.signinUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className='alert alert-danger'>
          <strong>OOps!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }
  render() {

    const { handleSubmit, fields: { email, password } } = this.props;

    //console.log(this.props.signinUser)

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <fieldset className='form-group'>
          <label>Email:</label>
          <input {...email} className='form-control'/>
        </fieldset>
        <fieldset className='form-group'>
          <label>Password:</label>
          <input {...password} type='password' className='form-control'/>
        </fieldset>
        {this.renderAlert()}
        <button action='submit' className='btn btn-primary'>Sign in</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}
Signin = reduxForm({
  form: 'signin',
  fields: [ 'email', 'password' ]
})(Signin);

export default connect(mapStateToProps, { signinUser })(Signin);

// export default reduxForm({
//   form: 'signin',
//   fields: ['email', 'password']
// }, null, { signinUser })(Signin);
