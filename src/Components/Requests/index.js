import React, { Component } from 'react';
import Request from '../Request';

export default class Requests extends Component {
    constructor(props){
      super(props);
    }

    componentWillMount(){
        this.props.getRequests();
    }
    render(){

        const { requests, loading } = this.props;
        return (
            <div>
                {
                requests.map((request) => {
                  return (

                   <Request request={request} editRequest = { this.props.editRequest } />
                    )
                  })
                }

            </div>
        )
    }
}
