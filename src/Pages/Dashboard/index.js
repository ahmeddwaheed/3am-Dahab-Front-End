import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';

import Pools from '../../Containers/PoolsContainers/pools_container';
import Requests from '../../Containers/RequestsContainer';
import PoolForm from '../PoolForm';
import NavigationBar from '../../Containers/UserCardContainer/nav_bar';

export default class Dashborad extends Component {
  render (){
    return (
      <div>
    <NavigationBar />
        <Link to="/form"><h2> Add pool </h2></Link>
        <Route path="/form" component={PoolForm} />
        <h2>pools</h2>
        <Pools status = {this.props.match.params.status} />
        <h2>requests</h2>
        <Requests />
      </div>
    )
  }
}
