import React, { Component } from 'react';
import UserCard from '../../Containers/UserCardContainer/user_card';
import { Button } from 'react-bootstrap';
import { Row, Spin, Alert } from 'antd';
import Checkout from '../../Checkout';
import './style.css';


export default class Details extends Component {
  constructor(){
      super()
      this.state = {
          addedSeat: false,
          user_details: {user_id:"", pool_id:"", position:""},
          user_in_pool: 0,
      }
    }
    componentWillMount(){
      this.props.getPool(this.props.id);
    }
    handleAddSeat(position, id){
      this.setState({user_details:{user_id:id, pool_id:this.props.id, position:position}, addedSeat:true})
    }
    handleDeleteSeat(){
      let card_id
      this.props.userCard.map(card => {
        if(this.props.user.id === card.user_id){
          card_id = card.id
        }
      })
      this.props.deleteSeat(card_id)
    }
    render(){
      const {loading, error, pool, userCard, user} = this.props;
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
        var user_position_in_pool = 0;
        userCard.map(card => {
          if(card.user_id == user.id){
            user_position_in_pool = card.position
          }
        })
        const userCards = this.props.userCard;
        return (
          <div className = 'clearfix pool-parent'>
            <h2>{name}</h2>
            <aside className = 'start pool-info'>
              <p>Amount: {amount}</p>
              <p>Monthly amount: {monthly_amount}</p>
              <p>Seats: {seat_number}</p>
              <p>Status: {status}</p>
            </aside>
            <div className = 'pool-details start'>
              {
                userCards.map(card => {
                  return (
                    <div className = 'card'>
                        {
                          <div><UserCard addSeat={this.handleAddSeat.bind(this)} card={card} in_pool={this.state.user_details.position} /></div>
                        }
                    </div>
                  )
                })
              }
              {
                this.state.addedSeat && !this.props.pools.pool.current_user_in_pool?
                <Button className = 'end' onClick={() => this.props.addSeat(this.state.user_details)} bsStyle="primary" > Confirm Join </Button>
                :
                this.props.pools.pool.current_user_in_pool && pool.status == 'comming'?
                <Button className = 'end' onClick={this.handleDeleteSeat.bind(this)} bsStyle="danger" > Leave </Button>
                :
                pool.status == 'running' && this.props.pool.current_user_in_pool && user_position_in_pool === this.props.pool.data.turn?
                <div className = 'end'>
                <Checkout name={name} description={"Online Payment"} amount={monthly_amount} user_id={user.id} pool_id={pool.id}/>
                </div>
                :
                null
              }
              </div>

          </div>
        )
      }
      else {
        return null
      }
    }
}
