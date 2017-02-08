import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { signupUser } from '../../actions/index';
import { connect } from 'react-redux';

class Signup extends Component {
  // onSubmit({ email, password, passwordConfirm }) {
  //   this.props.method({ email, password, passwordConfirm });
  // }
  onSubmit(formProps) {
    //call action creator
    this.props.signupUser(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className='alert alert-danger'>
          <strong>Oops !</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm } } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <fieldset className='form-group'>
          <label>Email:</label>
          <input {...email} className='form-control'/>
          {email.touched && email.error && <div className='error'>{email.error}</div>}
        </fieldset>
        <fieldset className='form-group'>
          <label>Password:</label>
          <input {...password} type='password' className='form-control'/>
          {password.touched && password.error && <div className='error'>{password.error}</div>}
        </fieldset>
        <fieldset className='form-group'>
          <label>confirm Password:</label>
          <input {...passwordConfirm} type='password' className='form-control'/>
          {passwordConfirm.touched && passwordConfirm.error && <div className='error'>{passwordConfirm.error}</div>}
        </fieldset>
        {this.renderAlert()}
        <button action='submit' className='btn btn-primary'>Sign up</button>
      </form>
    );
  }
}

function validate(formProps) {
  //console.log(formProps);
  const errors = {};

  if(!formProps.email) {
    errors.email = 'please enter an email';
  }
  if(!formProps.password) {
    errors.password = 'please enter a password';
  }
  if(!formProps.passwordConfirm) {
    errors.passwordConfirm = 'please enter a password confirmation';
  }
  if(formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match!';
  }
  return errors;
}

// function mapStateTopProps(state) {
//   return { errorMessage: state.auth.error }
// }
//
// export default reduxForm({
//   form: 'signup',
//   fields: ['email', 'password', 'passwordConfirm'],
//   validate
// }, mapStateTopProps, { signupUser })(Signup);

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}
Signup = reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
})(Signup);

export default connect(mapStateToProps, { signupUser })(Signup);
