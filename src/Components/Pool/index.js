import React, { Component } from 'react';
import PoolDetails from '../../Pages/PoolDetails';
import { Link, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Form from '../../Containers/PoolsContainers/pool_edit_container';



export default class Pool extends Component {

    constructor(props){
        super(props);
    }
    delete = () => {
      if (window.confirm("Do you really want to Delete?")) {
        this.props.onClick(this.props.pool.id)
      }
    }
    render(){
        return (
          <div style ={{backgroundColor:'grey', margin:'10px', padding:'10px'}}>
            <p>pool name: {this.props.pool.name}</p>
            <p>amount: {this.props.pool.amount}</p>
            <p>monthly amount: {this.props.pool.monthly_amount}</p>
            <p>seats: {this.props.pool.seat_number}</p>
            <p>status: {this.props.pool.status}</p>
            <Link to={`/pools/${this.props.pool.id}/request`}><Button bsStyle="primary"> join</ Button></Link>

            {this.props.pool.number_of_users == this.props.pool.seat_number && this.props.pool.status == "comming" ?<Link to={`/pools/${this.props.pool.id}/launch`}><Button bsStyle="success"> Launch</ Button></Link>: null}
            {this.props.pool.number_of_users == null && this.props.pool.status == "comming" ?<Link to={`/pools/${this.props.pool.id}/edit`}><Button bsStyle="primary"> Edit</ Button></Link>: null}
            {this.props.pool.number_of_users == null && this.props.pool.status == "comming" ?<Button onClick = {this.delete} bsStyle="danger"> Delete</ Button> : null}
          </div>
        )
    }
}

// <Link to="/form"><h2> add pool </h2></Link>


// <Button onClick={() => this.props.onClick(this.props.pool.id)} bsStyle="danger"> Delete</ Button>

// <Link to={`/pools/${this.props.pool.id}`}><Button bsStyle="success"> join</ Button> </Link>
