import React, { Component } from 'react';
import PoolDetails from '../../Pages/PoolDetails';
import { Link, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';


export default class Pool extends Component {
    render(){
        return (
          <div style ={{backgroundColor:'green', margin:'10px', padding:'10px'}}>
            <p>pool name: {this.props.pool.name}</p>
            <p>amount: {this.props.pool.amount}</p>
            <p>monthly amount: {this.props.pool.monthly_amount}</p>
            <p>seats: {this.props.pool.seat_number}</p>
            <p>status: {this.props.pool.status}</p>
            <Link to={`/pools/${this.props.pool.id}`}><Button bsStyle="success"> join</ Button> </Link>

          </div>
        )
    }
}
