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
        const {isUser, isAdmin} = this.props;
        return (
          <div style ={{backgroundColor:'grey', margin:'10px', padding:'10px'}}>
            <p>pool name: {this.props.pool.name}</p>
            <p>amount: {this.props.pool.amount}</p>
            <p>monthly amount: {this.props.pool.monthly_amount}</p>
            <p>seats: {this.props.pool.seat_number}</p>
            <p>status: {this.props.pool.status}</p>
            <p>number of users: {this.props.pool.number_of_users}</p>
            
            { isUser?<Link to={`/pools/${this.props.pool.id}/request`}><Button bsStyle="primary"> join</Button> </Link>:null}
            {isAdmin == true && this.props.pool.number_of_users == this.props.pool.seat_number && this.props.pool.status == "comming" ?<Link to={`/pools/${this.props.pool.id}/launch`}><Button bsStyle="success"> Launch</Button></Link>: null}
            {isAdmin == true && this.props.pool.number_of_users == 0 && this.props.pool.status == "comming" ?<Link to={`/pools/${this.props.pool.id}/edit`}><Button bsStyle="primary"> Edit </Button></Link>: null}
            {isAdmin == true && this.props.pool.number_of_users == 0 && this.props.pool.status == "comming" ?<Button onClick = {this.delete} bsStyle="danger"> Delete</Button> : null}
          </div>
        )
    }
}


