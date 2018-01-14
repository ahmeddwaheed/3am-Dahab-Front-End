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
      if(n > 0){
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
    }
    render(){
        const {isUser, isAdmin, currentUser} = this.props;
        const empty_seats = this.props.pool.seat_number - this.props.pool.number_of_users;
        const filled_seats = this.props.pool.number_of_users;
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

            {!currentUser.in_pool && isUser && this.props.pool.status == "comming" ? <Link to={`/pools/${this.props.pool.id}/request`}><Button bsStyle="primary"> join</Button> </Link>:null}
            {isAdmin == true && this.props.pool.number_of_users == this.props.pool.seat_number && this.props.pool.status == "comming" ?<Link to={`/pools/${this.props.pool.id}/launch`}><Button bsStyle="success"> Launch</Button></Link>: null}
            {isAdmin && this.props.pool.number_of_users == null && this.props.pool.status == "comming" ?<Link to={`/pools/${this.props.pool.id}/edit`}><Button bsStyle="primary"> Edit </Button></Link>: null}
            {isAdmin && this.props.pool.status == "comming" ?<Button onClick = {this.delete} bsStyle="danger"> Delete</Button> : null}
          </div>
        )
    }
}
