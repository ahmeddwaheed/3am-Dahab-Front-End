import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Notifications from '../../Containers/NotificationsContainer';
import Cable from 'actioncable';
import './style.css';
import Logo from './logo.svg';
import user from './user-male-black-shape.svg';
import {actionCableUrl} from '../../api';
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

    let cable = Cable.createConsumer(`${actionCableUrl}/cable?token=${localStorage.jwtToken}`);
    this.notifications = cable.subscriptions.create({
      channel: 'NotificationChannel'
    }, {
      connected: () => {

      },
      received: (data) => {
        this.setState({notification_count: this.state.notification_count +1 })
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
      <div >
        <ul className="nav navbar-nav navbar-right">


          <li>
          <Link to = "/profile/edit">
          {
            this.props.user.avatar?
            <img className='user-image' src = {user}/>
            :
            null
          }
          </Link>
          </li>
          <li><Notifications count={this.state.notification_count} /></li>
          <li><a href="#" onClick={this.logout.bind(this)}><span className = 'nav-text'>Logout</span></a></li>
        </ul>
      </div>
    );
    const guestLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="/register"><span className = 'nav-text'>Sign up</span></Link></li>
                <li><Link to="/login"><span className = 'nav-text'>Login</span></Link></li>
            </ul>
    );
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid header">
            <div className="navbar-header">
              {
                isUser?
                <Link to="/pools" ><span className = 'logo' ><img src = {Logo} alt = 'logo'/><span className = 'slideInLeft'>Dahab</span></span></Link>
                :
                <Link to="/" ><span className = 'logo' ><img src = {Logo} alt = 'logo'/><span className = 'slideInLeft'>Dahab</span></span></Link>
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
