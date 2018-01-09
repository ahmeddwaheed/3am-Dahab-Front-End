import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Users from './Containers/UsersContainer'
import UserCard from './Containers/UserCardContainer'
import PoolsPage from './Pages/PoolsPage';
import PoolForm from './Pages/PoolForm';
import PoolDetails from './Pages/PoolDetails';
import Notifications from './Containers/NotificationsContainer'



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

        </div>
      </div>
    );
  }
}

export default App;
