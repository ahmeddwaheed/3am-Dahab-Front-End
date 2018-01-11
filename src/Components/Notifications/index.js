import React, { Component } from 'react';
import Notification from '../Notification';
import Cable from 'actioncable';

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
            <div>
                  {notifications.map((notification) => {
                  return (
                   <Notification notification={notification}/>
                 )
                  })
                 }
            </div>
        )
    }
}
