import React, {Component} from 'react';
import Form from '../../Containers/PoolsContainers/pool_form_container';

export default class FormPage extends Component {
  render (){
    return (
      <div>
        <h2> New pool</h2>
        <Form />
      </div>
    )
  }
}