import React, {Component} from 'react';
import Pools from '../../Containers/PoolsContainers/pools_container';
// import { UserHeader } from '../../Containers/UserCardContainer/nav_bar';
// import Notifications from '../../Containers/NotificationsContainer';
// import Notifications from '../../Containers/NotificationsContainer';
import { Link, Route } from 'react-router-dom';
import './style.css' ;

export default class PoolsPage extends Component {
  render (){
    return (
      <div className = 'container'>
      {
        <div>
        <Pools status = {this.props.match.params.status} />
        </div>
      }
      </div>
    )
  }
}
