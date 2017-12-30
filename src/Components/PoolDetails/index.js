import React, { Component } from 'react';
import UserCard from '../../Containers/UserCardContainer';

export default class Details extends Component {
    componentWillMount(){
            this.props.getPool(this.props.id);
      }
    render(){
      const { name, amount, monthly_amount, seat_number, status } = this.props.pool;
        return (
          <div style ={{backgroundColor:'green', margin:'10px', padding:'10px'}}>
            <p>pool name: {name}</p>
            <p>amount: {amount}</p>
            <p>monthly amount: {monthly_amount}</p>
            <p>seats: {seat_number}</p>
            <p>status: {status}</p>
            {
              <div>
                <p style={{display: 'inline-block', margin:'10px'}}>
                  <UserCard user_id={1} />
                </p>
                <p style={{display: 'inline-block', margin: '10px'}}><UserCard /> </p>
                <p style={{display: 'inline-block', margin: '10px'}}><UserCard /> </p>
              </div>          
            }
          </div>
        )
    }
}
