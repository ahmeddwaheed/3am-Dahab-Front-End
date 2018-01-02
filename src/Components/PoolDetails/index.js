import React, { Component } from 'react';
import UserCard from '../../Containers/UserCardContainer';
import { Row, Spin, Alert } from 'antd';


export default class Details extends Component {
    componentWillMount(){
      this.props.getPool(this.props.id);
    }
    render(){
      const {loading, error, pool, userCard} = this.props;

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
      else if (this.props.pool !== undefined){
        const { name, amount, monthly_amount, seat_number, status} = this.props.pool;
        const userCards = this.props.userCard;
        return (
          <div style ={{backgroundColor:'green', margin:'10px', padding:'10px'}}>
            <p>pool name:{name}
            </p>
            <p>amount: {amount}</p>
            <p>monthly amount: {monthly_amount}</p>
            <p>seats: {seat_number}</p>
            <p>status: {status}</p>
            {
              userCards.map(card => {
                return (
                  <div style={{display: 'inline-block', margin:'10px'}}>
                      {
                        <div><UserCard card={card} pool_id={this.props.id} /></div>
                      }
                  </div>
                )
              })
            }
          </div>
        )
      }
      else {
        return null
      }
    }
}
