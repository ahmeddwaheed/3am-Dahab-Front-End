import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import PoolsPage from './Containers/PoolsContainers/pools_container';
import PoolForm from './Pages/PoolForm';
import PoolDetails from './Pages/PoolDetails';
import Requests from './Containers/RequestsContainer';
import RequestForm from './Containers/RequestFormContainer';
import Dashboard from './Pages/Dashboard';
import Form from './Containers/PoolsContainers/pool_edit_container';
import LaunchForm from './Containers/PoolsContainers/pool_launch_container';
import UserHeader from './Containers/UserCardContainer/nav_bar';
import UserSignInForm from './Containers/UserCardContainer/user_sigin_form';
import UserRegisterForm from './Containers/UserCardContainer/user_register_form';
import AdminLogin from './Containers/AdminContainer';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/login" component= {UserSignInForm} />
        <Route path="/pools" exact component={PoolsPage} />
        <Route exact path="/" component= {UserSignInForm} />
        <Route exact path="/register" component= {UserRegisterForm} />
        <Route exact path={"/pools/:id/request"} component={RequestForm} />
        <Route exact path={"/admin/login"} exact component={AdminLogin} />  
        <Route exact path={"/dashboard"} exact component={Dashboard} />
      </div>
      
    );
  }
}

export default App;

