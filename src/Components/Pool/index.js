import React, { Component } from 'react';
import PoolDetails from '../../Pages/PoolDetails';
import { Link, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Form from '../../Containers/PoolsContainers/pool_edit_container';
import './style.css';

export default class Pool extends Component {

    constructor(props){
        super(props);
    }
    delete = () => {
      if (window.confirm("Do you really want to Delete?")) {
        this.props.onClick(this.props.pool.id)
      }
    }
    fillArray(n, check){
      var seats = Array.apply(null, Array(n));
      return seats.map(seat => {
        if(check === "fill"){
          return (
          <span className ='circle'><i class="fa fa-circle" aria-hidden="true"></i></span>
          )
        }
        else{
          return (
            <span className = 'circle'><i class="fa fa-circle-o" aria-hidden="true"></i></span>

          )
        }
      })
    }
    render(){
        const {isUser, isAdmin} = this.props;
        var seats = [];
        seats.length = this.props.pool.number_of_users;
        const empty_seats = this.props.pool.seat_number - this.props.pool.number_of_users;
        const filled_seats = this.props.pool.number_of_users;
        // debugger
        return (
          <div className = 'pool clearfix'>
            <div className='pool-card'>
              <p><span className = 'amount'>{this.props.pool.amount} EGP</span> Total Payout </p>
              <p className = 'pool-name'> {this.props.pool.name}</p>
              <p><span className = 'amount'>{this.props.pool.monthly_amount} EGP</span> Per Month  </p>
            </div>

            <p>seats: {this.props.pool.number_of_users} /{this.props.pool.seat_number} </p>
            <p>
              {
                this.fillArray(filled_seats, "fill")
              }
              {
                this.fillArray(empty_seats, "empty")
              }
            </p>

            { isUser ? <Link to={`/pools/${this.props.pool.id}/request`}><Button bsStyle="primary"> join</Button> </Link>:null}
            {isAdmin == true ?<Link to={`/pools/${this.props.pool.id}/launch`} className = 'launch'>Launch</Link>: null}
            {isAdmin == true  ?<Link to={`/pools/${this.props.pool.id}/edit`} className = 'edit'> Edit </Link>: null}
            {isAdmin == true ?<button onClick = {this.delete} className="delete"> Delete</button> : null}
          </div>
        )
    }
}
