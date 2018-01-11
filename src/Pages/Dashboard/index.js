import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';

import Pools from '../../Containers/PoolsContainers/pools_container';
import Requests from '../../Containers/RequestsContainer';
import PoolForm from '../PoolForm';
import {AdminHeader} from '../../Containers/UserCardContainer/nav_bar';
import PoolLaunchForm from '../../Containers/PoolsContainers/pool_launch_container';
import App from '../../App';

export default class Dashborad extends Component {
  render (){
    return (
      <div>
        <AdminHeader />

        {
          localStorage.isAdmin?
          <div>
            <Link to="/new_pool"><h2> Add pool </h2></Link>
            <h2>pools</h2>
            <Pools status = {this.props.match.params.status} />
            <h2>requests</h2>
            <Requests />
          </div>
          :
          <h1>Invalid Request</h1>
        }
      </div>
    )
  }
}
