import React, {Component} from 'react';
import Pools from '../../Containers/PoolsContainers/pools_container';
import { UserHeader } from '../../Containers/UserCardContainer/nav_bar';

export default class PoolsPage extends Component {
  render (){
    return (
      <div>
      <UserHeader/>
      {
        localStorage.isAdmin || localStorage.isUser?
        <div>
        <Pools status = {this.props.match.params.status} />
        </div>
        :
        <h1>Invalid Request</h1>
      }
      </div>
    )
  }
}