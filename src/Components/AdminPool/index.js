import React, { Component } from 'react';
import PoolDetails from '../../Pages/PoolDetails';
import { Link, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';


export default class Pool extends Component {

    // getStatus = () =>{
    //   this.props.pool.status
    // }
    render(){
        return (
          <div style ={{backgroundColor:'#ccc', margin:'10px', padding:'10px'}}>
            <p>pool name: {this.props.pool.name}</p>
            <p>amount: {this.props.pool.amount}</p>
            <p>monthly amount: {this.props.pool.monthly_amount}</p>
            <p>seats: {this.props.pool.seat_number}</p>
            <p>status: {this.props.pool.status}</p>
            {? <Link to={}><Button bsStyle="primary"> Join</ Button> </Link> : null}
            {canEdit? <Link to={}><Button bsStyle="primary"> Edit</ Button> </Link> : null}
            {canLaunch? <Link to={}><Button bsStyle="success"> Launch</ Button> </Link> : null}
            {canDelete? <Link to={}><Button bsStyle="danger"> Delete</ Button> </Link> : null}

          </div>
        )
    }
}


// <Link to={`/pools/${this.props.pool.id}`}><Button bsStyle="success"> join</ Button> </Link>
