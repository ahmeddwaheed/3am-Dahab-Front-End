import React, { Component } from 'react';
import { Spin, Alert} from 'antd';
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
      const {loading, error} = this.props
      if(loading){
        return (
            <Spin />
        )
      }
      else if(error){
        return (
          <Alert
          message={error}
          type="error"
          />
        )
      }
      else {
        if (this.props.request.is_accepted == "pending") {
          return (
              <div className = 'request'>
                <p><span className="span">Name</span>: {this.props.request.user_name}</p>
                <p><span className="span">Reason</span>: {this.props.request.reason}</p>
                <p><span className="span">Background</span>: {this.props.request.background}</p>
                <p><span className="span">Program</span>: {this.props.request.program}</p>
                <Button onClick={this.accept} bsStyle="primary"> Accept</Button>
                <Button onClick={this.reject} bsStyle="danger"> Reject</Button>
              </div>
          )
        }
        else {
          return null
        }
      }
    }
}
