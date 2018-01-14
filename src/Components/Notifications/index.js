import React, { Component } from 'react';
import Notification from '../Notification';
import Cable from 'actioncable';
import {DropdownButton, ButtonToolbar, MenuItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';
import notification from './notification.svg';

export default class Notifications extends Component {

    componentWillMount() {
      this.props.getNotifications();

    }

    constructor(props) {
      super(props);
      this.state = {
        currentNotificationMessage: ''
      };
    }

    render(){
        const { notifications, loading } = this.props;
        return (
          <ButtonToolbar className = 'notifications-header'>
          {this.props.count != 0 ? this.props.count:null}
            <DropdownButton
              className = 'notifications-header'
              title= {<img className = 'nav-img' src = {notification} />}
              noCaret
              id="dropdown-no-caret"
            >
            {notifications.map((notification) => {
            return (
              <Link to={`/pools/${notification.pool_id}`}><MenuItem className="notification" >{notification.message}</MenuItem></Link>
           )
            })
           }

            </DropdownButton>
          </ButtonToolbar>
        )
    }
}
