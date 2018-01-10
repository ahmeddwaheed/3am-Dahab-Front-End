import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import PoolForm from '../../Containers/PoolsContainers/pool_form_container';



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
        <Link to="/new_pool"><button> Create Pool </button></Link>
          <Route path="/new_pool" exact component={PoolForm} />
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
          <div className="container-fluid">
            <div className="navbar-header">
              {
                isAdmin?
                <Link to="/dashboard" className="navbar-brand">3am Dahab</Link>
                :
                <Link to="/" className="navbar-brand">3am Dahab</Link>                
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