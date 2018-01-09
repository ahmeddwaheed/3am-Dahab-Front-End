import React, { Component } from 'react';
import UserCard from '../../Containers/UserCardContainer/user_card';
import { Button } from 'react-bootstrap';
import { Row, Spin, Alert } from 'antd';


export default class Details extends Component {
  constructor(){
      super()
      this.state = {
          addedSeat: false,
          user_details: {user_id:"", pool_id:"", position:""},
          user_in_pool: 0
      }
    }
    componentWillMount(){
      this.props.getPool(this.props.id);
    }
    handleAddSeat(position, id){
      this.setState({user_details:{user_id:id, pool_id:this.props.id, position:position}, addedSeat:true})
    }
    handleDeleteSeat(){
      // var clear = this.setState({user_details:{user_id:null, pool_id:null}, addedSeat:false})
      // this.props.addSeat(clear) 
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
          <div>
            <h2>{name}</h2>
            <div style ={{backgroundColor: 'blue', margin:'10px', padding:'10px'}}>
              
              <p>amount: {amount}</p>
              <p>monthly amount: {monthly_amount}</p>
              <p>seats: {seat_number}</p>
              <p>status: {status}</p>
              {
                userCards.map(card => {
                  return (
                    <div style={{display: 'inline-block', margin:'10px'}}>
                        {
                          <div><UserCard addSeat={this.handleAddSeat.bind(this)} card={card} in_pool={this.state.user_details.position} /></div>
                        }
                    </div>
                  )
                })
              }
              <br/><br/><br/>
              {
                this.state.addedSeat?
                <Button onClick={() => this.props.addSeat(this.state.user_details)} bsStyle="primary" > Confirm Join </Button>
                :
                <Button onClick={this.handleDeleteSeat.bind(this)} bsStyle="danger" > Leave </Button>
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
