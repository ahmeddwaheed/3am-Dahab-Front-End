import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import PoolsPage from './Pages/PoolsPage';
import PoolForm from './Containers/PoolsContainers/pool_form_container';
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
import UserEditForm from './Containers/UserCardContainer/user_edit_form';
import PoolLaunchForm from './Containers/PoolsContainers/pool_launch_container';
import PoolEditForm from './Containers/PoolsContainers/pool_edit_container';
import Notifications from './Containers/NotificationsContainer';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Route exact path="/login" component= {UserSignInForm} />
        <Route exact path="/pools" exact component={PoolsPage} />
        <Route exact path="/" component= {UserSignInForm} />
        <Route exact path="/register" component= {UserRegisterForm} />
        <Route exact path={"/pools/:id/request"} component={RequestForm} />
        <Route exact path={`/profile/edit`} exact component={UserEditForm} />
        <Route path={"/admin/login"} exact component={AdminLogin} />
        <Route path={"/dashboard"} exact component={Dashboard} />
        <Route path={"/new_pool"} exact component={PoolForm} />
        <Route path="/notifications" exact component={Notifications} />
        <Route path={`/pools/:id`} exact component={PoolDetails} />
        <Route path="/pools/:id/launch" exact component={PoolLaunchForm} />
        <Route path="/pools/:id/edit" exact component={PoolEditForm} />
      </div>
    );
  }
}

export default App;
