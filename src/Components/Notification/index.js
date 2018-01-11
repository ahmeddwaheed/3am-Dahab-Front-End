import React, { Component } from 'react';
// import NotificationDetails from '../../Pages/NotificationDetails';
import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

export default class Notification extends Component {

  // connected: () => {}
  // received: (data) => {
  //   // console.log(data)
  //   alert(data.message)
  // }
  // create: (notificationContent) => {
  //   // this.perform('create', {
  //   //   content: notificationContent
  //   // });
  // }

  render(){
      return (
        <div style ={{backgroundColor:'#eee', margin:'10px', padding:'10px'}}>
          <p>notification : {this.props.notification.message}</p>
          <p>user: {this.props.notification.user_id}</p>
          <p>pool: {this.props.notification.pool_id}</p>
          <Link to={`/pools/${this.props.notification.pool_id}`}>GO TO POOL</Link>
        </div>
      )
  }
}
