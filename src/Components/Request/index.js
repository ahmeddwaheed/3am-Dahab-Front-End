import React, { Component } from 'react';
import RequestDetails from '../../Pages/RequestsPage';
import { Link, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';


export default class Request extends Component {

    constructor(props){
      super(props);

    }
    accept = () =>{
      this.props.editRequest(this.props.request.id, {is_accepted: true});
    }
    reject = () =>{
      this.props.editRequest(this.props.request.id, {is_accepted: false});
    }
    render(){

        return (
          <div style ={{backgroundColor:'#ccc', margin:'10px', padding:'10px'}}>
            <p>reason: {this.props.request.reason}</p>
            <p>background: {this.props.request.background}</p>
            <p>program: {this.props.request.program}</p>
            <Link to={`/requests/${this.props.request.id}`}><Button onClick={this.accept} bsStyle="primary"> Accept</ Button> </Link>
            <Link to={`/requests/${this.props.request.id}`}><Button onClick={this.reject} bsStyle="danger"> Reject</ Button> </Link>
          </div>
        )
    }
}
// {is_accepted: true}
// the old  way
// this.setState({is_accepted:false});
// this.editRequest(`${this.props.request.id}`,this.state);

// <Link to={`/requests/${this.props.request.id}/request`}><Button onClick={this.accept} bsStyle="primary"> Accept</ Button> </Link>

// <Link to={`/requests/${this.props.request.id}`}><Button bsStyle="success"> join</ Button> </Link>
