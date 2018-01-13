import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Notifications from '../../Containers/NotificationsContainer';
import Cable from 'actioncable';




export default class UserHeader extends Component {

  constructor(){
    super()
    this.state = {
      notification_count: 0
    }
  }

  componentWillMount(){
    this.props.setCurrentUser();
    this.createSocket();
  }

  logout(e){
    e.preventDefault();
    this.props.userLogout();
  }
  createSocket() {

    let cable = Cable.createConsumer(`ws://localhost:3001/cable?token=${localStorage.jwtToken}`);
    this.notifications = cable.subscriptions.create({
      channel: 'NotificationChannel'
    }, {
      connected: () => {

      },
      received: (data) => {
        this.setState({notification_count: this.state.notification_count +1 })
        alert(data);
      },
      create: (notificationContent) => {
        this.perform('create', {
            content: notificationContent
        });
      }
    })
  }

  render() {
    const {isUser} = this.props;
    const userLinks = (
      <div>
      {
        this.props.user.avatar?
        <Link to="/profile/edit">
          <img style={{'borderRadius': '50px', 'width': '35px', 'height': '40px'}} alt="picture" src={`http://localhost:3001${this.props.user.avatar.url}`} />
        </Link>
        :
        null
      }
        <ul className="nav navbar-nav navbar-right">
        <li><Notifications /><p style={{"color": "red"}}>{this.state.notification_count}</p></li>
          <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
        </ul>
      </div>
    );
    const guestLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="/register">Sign up</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
    );
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              {
                isUser?
                <Link to="/pools" className="navbar-brand">Dahab</Link>
                :
                <Link to="/" className="navbar-brand">Dahab</Link>
              }
            </div>

            <div>
                {isUser? userLinks : guestLinks}
            </div>

          </div>
        </nav>
      );
  }
}
