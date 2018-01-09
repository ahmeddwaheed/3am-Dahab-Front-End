import React, { Component } from 'react';
// import NotificationDetails from '../../Pages/NotificationDetails';
// import { Link, Route } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

export default class Notification extends Component {
    render(){
        return (
          <div style ={{backgroundColor:'#eee', margin:'10px', padding:'10px'}}>
            <p>notification : {this.props.notification.message}</p>
            <p>user: {this.props.notification.user_id}</p>
            <p>pool: {this.props.notification.pool_id}</p>
          </div>
        )
    }
}
