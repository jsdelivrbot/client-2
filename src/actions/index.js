import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';

const API_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch) {
    //submit email/password to the server
    axios.post(`${API_URL}/signin`, { email, password })
      .then(response => {
        //if request is good..
        //-Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        //-Save the JWT token
        localStorage.getItem('token', response.data.token);
        //-redirect to the route/....whatever
      browserHistory.push('/feature');
      })
      .catch(() => {
        //if request is bad...
        //-show an error to the user
        dispatch(auth_error('bad log in info'));

      });
  }
}
export function auth_error(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER,

  }
}
