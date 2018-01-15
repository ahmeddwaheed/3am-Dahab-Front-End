import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import PoolForm from '../../Containers/PoolsContainers/pool_form_container';
import Logo from './logo.svg';
import './style.css';


export default class UserHeader extends Component {

  componentWillMount(){
    this.props.setCurrentAdmin();
  }

  logout(e){
    e.preventDefault();
    this.props.userLogout();
  }

  render() {
    const {isAdmin} = this.props;
    const userLinks = (
        <div>
        <ul className="nav navbar-nav navbar-right">
            <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
        </ul>
      </div>
    );
    const guestLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="/login">Login</Link></li>
            </ul>
    );
    return (
        <nav className="navbar navbar-default">
          <div className=" header container-fluid">
            <div className="navbar-header">
              {
                isAdmin?
                <Link to="/dashboard" className="navbar-brand"> <span className = 'logo' ><img src = {Logo} alt = 'logo'/><span className = 'slideInLeft'>Dahab</span></span></Link>
                :
                <Link to="/" className="navbar-brand"><span className = 'logo' ><img src = {Logo} alt = 'logo'/><span className = 'slideInLeft'>Dahab</span></span></Link>
              }
            </div>

            <div>
                {isAdmin? userLinks : guestLinks}
            </div>

          </div>
        </nav>
      );
  }
}
