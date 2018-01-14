import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './style.css';


export default class Request extends Component {

    constructor(props){
      super(props);

    }
    accept = () =>{
      this.props.editRequest(this.props.request.id, {is_accepted: "accepted"});
    }
    reject = () =>{
      this.props.editRequest(this.props.request.id, {is_accepted: "rejected"});
    }
    render(){
        if (this.props.request.is_accepted == "pending") {
          return (
              <div className = 'request'>
                <p>name: {this.props.request.user_name}</p>
                <p>reason: {this.props.request.reason}</p>
                <p>background: {this.props.request.background}</p>
                <p>program: {this.props.request.program}</p>
                <Button onClick={this.accept} bsStyle="primary"> Accept</ Button>
                <Button onClick={this.reject} bsStyle="danger"> Reject</ Button>
              </div>
          )
        } else {
          return null
        }

    }
}
