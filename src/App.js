import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import PoolsPage from './Containers/PoolsContainers/pools_container';
import PoolForm from './Pages/PoolForm';
import PoolDetails from './Pages/PoolDetails';
import Notifications from './Containers/NotificationsContainer';
import Requests from './Containers/RequestsContainer';
import RequestForm from './Containers/RequestFormContainer';
import Dashboard from './Pages/Dashboard';
import Form from './Containers/PoolsContainers/pool_edit_container';
import LaunchForm from './Containers/PoolsContainers/pool_launch_container';
import NavigationBar from './Containers/UserCardContainer/nav_bar';
import UserSignInForm from './Containers/UserCardContainer/user_sigin_form';
import UserRegisterForm from './Containers/UserCardContainer/user_register_form';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header style ={{backgroundColor:'yellow', margin:'10px', padding:'10px'}}>
          <h1 className="App-title">Dahab</h1>
          <Users />
          <UserCard />
          <p> Dahab</p>
        </header>
        <div>
          <Link to="/pools"><h2> pools </h2></Link>
          <Route path="/pools" exact component={PoolsPage} />

          <Link to="/form">
            <h2> add pool </h2>
          </Link>
          <Route path="/form" component={PoolForm} />


          <Route path={"/pools/:id"} component={PoolDetails} />


          <Link to="/notifications"><h2> notifications </h2></Link>
          <Route path="/notifications" exact component={Notifications} />
      
          <NavigationBar /> 
          <Route exact path="/login" component= {UserSignInForm} />
          <Route path="/pools" exact component={PoolsPage} />
          <Route exact path="/" component= {UserSignInForm} />
          <Route exact path="/register" component= {UserRegisterForm} />

        </div>

      </div>
      
    );
  }
}

export default App;

