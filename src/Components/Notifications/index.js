import React, { Component } from 'react';
import Notification from '../Notification';

// const Search = Input.Search;
//
export default class Notifications extends Component {
    constructor(){
        super();
        this.state = {
            newNotification: ''
        }
    }
    componentWillMount(){
        this.props.getNotifications();
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
