import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Notification extends Component {


  render(){
      return (
        <div >
          <p>notification : {this.props.notification.message}</p>
          <p>user: {this.props.notification.user_id}</p>
          <p>pool: {this.props.notification.pool_id}</p>
        </div>
      )
  }
}
