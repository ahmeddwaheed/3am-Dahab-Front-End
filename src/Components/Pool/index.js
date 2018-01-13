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
            <i class="fa fa-circle" aria-hidden="true"></i>
          )
        }
        else{
          return (
            <i class="fa fa-circle-o" aria-hidden="true"></i>

          )
        }
      })
    }
    render(){
        const {isUser, isAdmin, currentUser} = this.props;
        var seats = [];
        seats.length = this.props.pool.number_of_users;
        const empty_seats = this.props.pool.seat_number - this.props.pool.number_of_users;
        const filled_seats = this.props.pool.number_of_users;
        return (
          <div className = 'pool clearfix'>
            <p className = 'start'><span className = 'amount'>{this.props.pool.amount} &#163;</span> Total Payout </p>
            <p className = 'end'><span className = 'amount'>{this.props.pool.monthly_amount}&#163;</span> Per Month  </p>
            <p className = 'pool-name'> {this.props.pool.name}</p>

            <p>seats: {this.props.pool.number_of_users} /{this.props.pool.seat_number} </p>
            {
              this.fillArray(filled_seats, "fill")
            }
            {
              this.fillArray(empty_seats, "empty")
            }

            {!currentUser.in_pool && isUser && this.props.pool.status == "comming" ? <Link to={`/pools/${this.props.pool.id}/request`}><Button bsStyle="primary"> join</Button> </Link>:null}
            {isUser ?<Link to ={`/pools/${this.props.pool.id}`}><Button  bsStyle="primary"> View</Button></Link> : null}
            {isAdmin == true && this.props.pool.number_of_users == this.props.pool.seat_number && this.props.pool.status == "comming" ?<Link to={`/pools/${this.props.pool.id}/launch`}><Button bsStyle="success"> Launch</Button></Link>: null}
            {isAdmin && this.props.pool.number_of_users == null && this.props.pool.status == "comming" ?<Link to={`/pools/${this.props.pool.id}/edit`}><Button bsStyle="primary"> Edit </Button></Link>: null}
            {isAdmin && this.props.pool.number_of_users == null && this.props.pool.status == "comming" ?<Button onClick = {this.delete} bsStyle="danger"> Delete</Button> : null}
          </div>
        )
    }
}
