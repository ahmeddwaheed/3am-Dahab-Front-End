import React, { Component } from 'react';
import { Spin, Alert} from 'antd';
import Request from '../Request';

export default class Requests extends Component {
    constructor(props){
      super(props);
    }

    componentWillMount(){
        this.props.getRequests();
    }
    render(){
        const { requests, loading, error } = this.props;
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
          else {
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
}
