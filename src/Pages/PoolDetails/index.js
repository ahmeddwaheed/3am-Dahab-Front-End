import React, {Component} from 'react';
import PoolDetails from '../../Containers/PoolsContainers/pool_details_container';
import { Route } from 'react-router-dom';
import { UserHeader } from '../../Containers/UserCardContainer/nav_bar';

export default class Details extends Component {
  render (){
    return (
      <div>
        <UserHeader/>
        <PoolDetails id = {this.props.match.params.id} />
      </div>
    )
  }
}