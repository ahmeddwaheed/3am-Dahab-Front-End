import React, {Component} from 'react';
import Pools from '../../Containers/PoolsContainers/pools_container';

export default class PoolsPage extends Component {
  render (){
    return (
      <div>
        <h2> Almakinah Pools </h2>
        <Pools />
      </div>
    )
  }
}
