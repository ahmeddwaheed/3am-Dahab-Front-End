import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';

import Pools from '../../Containers/PoolsContainers/pools_container';
import Requests from '../../Containers/RequestsContainer';
import PoolForm from '../PoolForm';
import PoolLaunchForm from '../../Containers/PoolsContainers/pool_launch_container';
import App from '../../App';
import './style.css';

export default class Dashborad extends Component {
  render (){
    return (
      <div>
        {
          <div className = 'clearfix'>
            <section className = 'start pools'>
              <Link to="/new_pool"><h2 className = 'add-pool'> <i class="fa fa-plus-square-o fa-5x" aria-hidden="true"></i> </h2></Link>
              <h2>pools</h2>
              <Pools  status = {this.props.match.params.status} />
            </section>

            <aside  className = 'end requests' >
              <h2 >requests</h2>
              <Requests />
            </aside>
          </div>
        }
      </div>
    )
  }
}
