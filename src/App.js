import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Users from './Containers/UsersContainer'
import UserCard from './Containers/UserCardContainer'
import PoolsPage from './Containers/PoolsContainers/pools_container';
import PoolForm from './Pages/PoolForm';
import PoolDetails from './Pages/PoolDetails';
import Requests from './Containers/RequestsContainer';
import RequestForm from './Containers/RequestFormContainer';
import Dashboard from './Pages/Dashboard';
import Form from './Containers/PoolsContainers/pool_edit_container';
import LaunchForm from './Containers/PoolsContainers/pool_launch_container';


class App extends Component {
  render() {
    return (
      <div className="App">
      <header style ={{backgroundColor:'#ddd', margin:'10px', padding:'10px'}}>
          <h1 className="App-title">-Dahab</h1>

          <Link to="/dashborad"><h2> Dashborad </h2></Link>
          <Route path="/dashborad" exact component={Dashboard} />
        </header>
        <div>
          <Link to="/pools"><h2> pools </h2></Link>
          <Route path="/pools" exact component={PoolsPage} />

          <Link to="/form"><h2> add pool </h2></Link>
          <Route path="/form" component={PoolForm} />


          <Route path={"/pools/:id/request"} component={RequestForm} />


          <Link to="/requests"><h2> requests </h2></Link>
          <Route path="/requests" exact component={Requests} />

          <Route path={"/pools/:id/edit"} component={Form} />

          <Route path={"/pools/:id/launch"} component={LaunchForm} />

        </div>
      </div>
    );
  }
}

export default App;

  // <Route path={"/pools/:id"} component={PoolDetails} />
