import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import NavigationBar from './Containers/UserCardContainer/nav_bar';
import UserSignInForm from './Containers/UserCardContainer/user_sigin_form';
import UserRegisterForm from './Containers/UserCardContainer/user_register_form';
import pools_container from './Containers/PoolsContainers/pools_container';
import PoolDetails from './Pages/PoolDetails';
import Pools from './Pages/PoolsPage';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <NavigationBar />            
      {
            (localStorage.jwtToken)?
            <div>
              <Route exact path="/home/pools" component= {Pools} />
            </div>
            :
            <div>
              <Route exact path="/" component= {UserSignInForm} />                        
              <Route exact path="/login" component= {UserSignInForm} />             
              <Route exact path="/register" component= {UserRegisterForm} />
              <Route exact path="/home/pools/:id" component= {PoolDetails} /> 
            </div>          
        }
      </div>
    );
  }
}

export default App;
