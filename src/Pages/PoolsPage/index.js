import React, {Component} from 'react';
import Pools from '../../Containers/PoolsContainers/pools_container';
import { UserHeader } from '../../Containers/UserCardContainer/nav_bar';
import Notifications from '../../Containers/NotificationsContainer';
import { Link, Route } from 'react-router-dom';


export default class PoolsPage extends Component {
  render (){
    return (
      <div>
      <UserHeader/>
      {
        localStorage.isAdmin || localStorage.isUser?
        <div>
        <Link to="/notifications"><h2> notifications </h2></Link>
          <Route path="/notifications" exact component={Notifications} />
        <Pools status = {this.props.match.params.status} />
        </div>
        :
        <h1>Invalid Request</h1>
      }
      </div>
    )
  }
}