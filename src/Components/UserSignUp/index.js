import React, {Component} from 'react';
import { Spin, Alert} from 'antd';
import 'antd/lib/grid/style/index.css';
import 'antd/lib/spin/style/index.css';
import 'antd/lib/alert/style/index.css';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router'


export default class UserSignUp extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            fireRedirect: false
        }
    }
    addNewUser = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
        this.setState({name:"", email:"", password:"", password_confirmation:"", fireRedirect: true});
    }
    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }
    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }
    handleConfirmChange = (e) => {
        this.setState({password_confirmation: e.target.value})
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
                <h1> Register </h1>
                <form onSubmit = {this.addNewUser}>
                    <label>Name 
                        <input  value={this.state.name} type='text' name='name' onChange={this.handleNameChange.bind(this)} />
                    </label><br/>

                    <label>Email
                        <input  value={this.state.email} type='email' name='email' onChange={this.handleEmailChange.bind(this)} />
                    </label><br/>

                    <label>Password
                        <input  value={this.state.password} type='password' name='password' onChange={this.handlePasswordChange.bind(this)} />
                    </label><br/>

                    <label>Confirm Password
                        <input  peek= "" value={this.state.confirm} type='password' name='password' onChange={this.handleConfirmChange.bind(this)} />
                    </label>
                    <br/>
                    <Button bsStyle="primary" type= "submit">
                        Sign Up
                    </Button>
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