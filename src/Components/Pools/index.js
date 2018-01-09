import React, { Component } from 'react';
import Pool from '../Pool';
import history from '../../history';
import {UserHeader} from '../../Containers/UserCardContainer/nav_bar';

export default class Pools extends Component {
    constructor(props){
        super(props);
        this.state = {
          value:""
        }
    }
    change = (event) => {
      this.props.getPools(event.target.value);
      this.setState({value: event.target.value});
    }
    componentWillMount(){
      if(this.props.currentUser){
        this.props.getPools(this.state.value);
      }
    }
    render(){
        const { pools, loading , currentUser, isUser , isAdmin } = this.props;
        if(isUser || isAdmin){
          return (
            <div>
                  {
                    isUser? 
                    <div>
                      <h1>HI {currentUser.name}</h1>
                      {
                        currentUser.avatar?
                        <img style={{'borderRadius': '50px', 'width': '100px', 'height': '100px'}} alt="picture" src={`http://localhost:3001${currentUser.avatar.url}`} />
                        :
                        null
                      }
                    </div>
                    :
                    null
                  }
                    <select name = "pools" id = "pools" onChange = {this.change} value ={this.state.value}>
                      <option value = "" >All</option>
                      <option value = "comming">comming</option>
                      <option value = "running">running</option>
                    </select>
                    {pools.map((pool) => {
                      return (
                      <Pool isAdmin= {isAdmin} isUser= {isUser} pool={pool} onClick={this.props.deletePool.bind(this)} />
                      )
                    })
                   }
  
              </div>
          )
        }
        else {
          return (
            <div>
              <h1> Invalid Request </h1>
            </div>
          )
        }
    }
}
