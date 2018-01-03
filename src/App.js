import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import UserSignInForm from './Containers/UserCardContainer/user_sigin_form';
import DirectoryPage from './Pages/DirectoryPage';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <header style ={{backgroundColor:'yellow', margin:'10px', padding:'10px'}}>
          <h1 className="App-title">3am-Dahab</h1>
        </header>
        <div>
          
            <Route path="/" component= {UserSignInForm} />
            <Route path="/home" component = {DirectoryPage} />

        </div>
      </div>
    );
  }
}

export default App;
