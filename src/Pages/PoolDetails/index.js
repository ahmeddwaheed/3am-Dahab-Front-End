import React, {Component} from 'react';
import PoolDetails from '../../Containers/PoolsContainers/pool_details_container';
import { Route } from 'react-router-dom';
import { UserHeader } from '../../Containers/UserCardContainer/nav_bar';
import { AdminHeader } from '../../Containers/UserCardContainer/nav_bar';


export default class Details extends Component {
  render (){
    return (
      <div>
      {
        localStorage.isAdmin?
        <div>
          <AdminHeader/>
          <PoolDetails id = {this.props.match.params.id} />
        </div>
        :
        localStorage.isUser?
        <div>
          <UserHeader/>
          <PoolDetails id = {this.props.match.params.id} />
        </div>
        :
        <h1> Invalid Request</h1>

      }
      </div>
    )
  }
}