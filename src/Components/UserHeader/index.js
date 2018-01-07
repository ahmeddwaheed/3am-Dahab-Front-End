import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class UserHeader extends Component {

  componentWillMount(){
    this.props.setCurrentUser();
  }

  logout(e){
    e.preventDefault();
    this.props.userLogout();
  }
  
  render() {
    const {isUser} = this.props;
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
              {
                isUser?
                <Link to="/pools" className="navbar-brand">3am Dahab</Link>
                :
                <Link to="/" className="navbar-brand">3am Dahab</Link>                
              }
            </div>
            
            <div>
                {isUser? userLinks : guestLinks}
            </div>
            
          </div>
        </nav>
      );
  }
}