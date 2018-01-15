import React, {Component} from 'react';
import PoolDetails from '../../Containers/PoolsContainers/pool_details_container';
import { Route } from 'react-router-dom';


export default class Details extends Component {
  render (){
    return (
      <div className="over-flow">
      {
        <PoolDetails id = {this.props.match.params.id} />
      }
      </div>
    )
  }
}