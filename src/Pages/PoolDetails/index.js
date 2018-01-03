import React, {Component} from 'react';
import PoolDetails from '../../Containers/PoolsContainers/pool_details_container';
import { Route } from 'react-router-dom';

export default class Details extends Component {
  render (){
    return (
      <div>
        <h2> helloooooooo from  pool details </h2>
        <PoolDetails id = {this.props.match.params.id} />
        <Route path="/joined_pool/" Component={PoolDetails}/>
      </div>
    )
  }
}
