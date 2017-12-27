import React, {component, Component} from 'react';
import { Spin, Alert} from 'antd';
import 'antd/lib/grid/style/index.css';
import 'antd/lib/spin/style/index.css';
import 'antd/lib/alert/style/index.css';

export default class Users extends Component {
    componentWillMount(){
        this.props.getUsers();
        console.log(this.props);
    }
    render (){
        const { users, loading, error } = this.props;
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
                <h1> Hello users card </h1>
                {
                    users.map(user => {
                        return (
                            <div>
                                <p> {user.username} </p>
                            </div>
                        )
                    })
                }
                </div>
            )
        }
    }
}