import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 


export default class NavigationBar extends Component {

    logout(e){
      e.preventDefault();
      this.props.userLogout();
    }

  render() {
    const {isAuthenticated} = this.props.auth;
    const userLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
            </ul>
    );
    const guestLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="/register">Sign up</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
    );
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">3am Dahab</Link>
            </div>
            
            <div>
                {isAuthenticated? userLinks : guestLinks}
            </div>
            
          </div>
        </nav>
      );
  }
}