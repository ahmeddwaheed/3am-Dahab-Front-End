import React, { Component } from 'react';
import Pool from '../Pool';

// const Search = Input.Search;
//
export default class Pools extends Component {
    constructor(){
        super();
        this.state = {
            newPool: ''
        }
    }
    componentWillMount(){
        this.props.getPools();
    }
    render(){
        const { pools, loading } = this.props;
        return (
            <div>
                  {pools.map((pool) => {
                  return (
                   <Pool pool={pool}/>
                 )
                  })
                 }

            </div>
        )
    }
}
