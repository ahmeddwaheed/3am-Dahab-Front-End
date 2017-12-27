import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Users from './Containers/UsersContainer'
import UserCard from './Containers/UserCardContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">3am-Dahab</h1>
          <div className="App-container">
          </div>
          <Users />
          <UserCard />
      </div>
    );
  }
}

export default App;
