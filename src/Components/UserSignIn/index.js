import React, {Component} from 'react';
import { Spin, Alert} from 'antd';
import 'antd/lib/grid/style/index.css';
import 'antd/lib/spin/style/index.css';
import 'antd/lib/alert/style/index.css';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router'
import { Link, Route } from 'react-router-dom';

export default class UserSignIn extends Component {
    constructor(){
        super()
        this.state = {
            email: "",
            password: "",
        }
    }
    SignIn = (e) => {
        e.preventDefault();
        this.props.userSignIn(this.state);
        this.setState({email:"", password:""});
    }
    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }
    render(){
        const { loading , error, message,  fireRedirect} = this.props;
        if(loading){
            return (
                <Spin />
            )
        }
        return (
            <div>
                <h1> Sign In </h1>
                <form onSubmit = {this.SignIn}>

                    <label>Email
                        <input  value={this.state.email} type='email' name='email' onChange={this.handleEmailChange.bind(this)} />
                    </label><br/>

                    <label>Password
                        <input  value={this.state.password} type='password' name='password' onChange={this.handlePasswordChange.bind(this)} />
                    </label><br/>

                    <Link to ="/home">
                        <Button bsStyle="success" type= "submit"> 
                            Sign In
                        </Button>
                    </Link>
                    {
                        error?
                            <Alert message={error} type="error"/>
                            :
                            false
                    }
                </form>
                
            </div>
        )
    }
}