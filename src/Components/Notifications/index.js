import React, { Component } from 'react';
import Notification from '../Notification';
import Cable from 'actioncable';
import {DropdownButton, ButtonToolbar, MenuItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';


// const Search = Input.Search;
//
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
          <ButtonToolbar>
            <DropdownButton
              bsStyle="default"
              title= {<i className='fa fa-bell-o' aria-hidden='true'></i>}
              noCaret
              id="dropdown-no-caret"
            >
            {notifications.map((notification) => {
            return (
              <Link to={`/pools/${notification.pool_id}`}><MenuItem>{notification.message}</MenuItem></Link>


           )
            })
           }

            </DropdownButton>
          </ButtonToolbar>
        )
    }
}
