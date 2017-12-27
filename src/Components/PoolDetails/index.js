import React, { Component } from 'react';


export default class Details extends Component {
    componentWillMount(){
            this.props.getPool(this.props.id);
      }
    render(){
        return (
          <div style ={{backgroundColor:'green', margin:'10px', padding:'10px'}}>
            <p>pool name: {this.props.pool.name}</p>
            <p>amount: {this.props.pool.amount}</p>
            <p>monthly amount: {this.props.pool.monthly_amount}</p>
            <p>seats: {this.props.pool.seat_number}</p>
            <p>status: {this.props.pool.status}</p>
          </div>
        )
    }
}
