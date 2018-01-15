import React, { Component } from 'react';
import Pool from '../Pool';

// const Search = Input.Search;
//
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
      this.props.getPools(this.state.value);
    }
    render(){
        const { pools, loading } = this.props;
        return (
            <div>
                  <select name = "pools" id = "pools" onChange = {this.change} value ={this.state.value}>
                    <option value = "" >All</option>
                    <option value = "comming">coming</option>
                    <option value = "running">running</option>
                  </select>
                  {pools.map((pool) => {
                  return (
                   <Pool pool={pool} />
                 )
                  })
                 }

            </div>
        )
    }
}
