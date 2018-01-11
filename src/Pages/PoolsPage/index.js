import React, {Component} from 'react';
import Pools from '../../Containers/PoolsContainers/pools_container';
import Notifications from '../../Containers/NotificationsContainer';
import { Link, Route } from 'react-router-dom';


export default class PoolsPage extends Component {
  render (){
    return (
      <div>
      {
        <div>
        <Link to="/notifications"><h2> notifications </h2></Link>
        <Pools status = {this.props.match.params.status} />
        </div>
      }
      </div>
    )
  }
}
