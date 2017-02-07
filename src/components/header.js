import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      //show a link to sign out
      //we dont want a div between the ul and the li
    return <li className='nav-item'>
        <Link className='nav-link' to='/signout'>Sign Out</Link>
      </li>
    } else {
      //show a link to sign out or sign up
      return [ //react feature for render multiple
        <li className='nav-item'>
          <Link className='nav-link' to='/signin'>Sign In</Link>
        </li>,
        <li className='nav-item'>
          <Link className='nav-link' to='/signup'>Sign Up</Link>
        </li>
      ];
    }
  }
  render() {
    return(
      <nav className='navbar navbar-light'>
        <Link to='/' className='navbar-brand'>Redux Auth</Link>
        <ul className='nav navbar-nav'>
            {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}
function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}
export default connect(mapStateToProps)(Header);