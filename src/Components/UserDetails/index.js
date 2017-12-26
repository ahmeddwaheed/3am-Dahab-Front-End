import React, {Component} from 'react';
import { Spin, Alert} from 'antd';
import 'antd/lib/grid/style/index.css';
import 'antd/lib/spin/style/index.css';
import 'antd/lib/alert/style/index.css';

export default class UserDetails extends Component {
    componentWillMount(){
        this.props.getUser(35);
    }
    render (){
        const { user, loading, error } = this.props;
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
        else{
            return (
                <div>
                    <h1> Hello user card </h1>
                    <p> {user.username} </p>
                    <p> {user.email} </p>                    
                </div>
            )
        }
    }
}