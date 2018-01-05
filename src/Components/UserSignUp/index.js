import React, {Component} from 'react';
import { Spin, Alert} from 'antd';
import 'antd/lib/grid/style/index.css';
import 'antd/lib/spin/style/index.css';
import 'antd/lib/alert/style/index.css';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router'
import { Link, Route } from 'react-router-dom';
import NavigationBar from '../../Containers/UserCardContainer/nav_bar';


export default class UserSignUp extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            password_confirmation: ""
        }
    }
    addNewUser = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
        this.setState({name:"", email:"", password:"", password_confirmation:""});
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
        const { loading , error, message , isAuthenticated} = this.props;
        
        if(loading){
            return (
                <Spin />
            )
        }
        if(!isAuthenticated){
            return (
                <div>
                <NavigationBar />
                    <h1> Register </h1>
                    <form  onSubmit = {this.addNewUser} className="demoForm" >
                        <div>
                            <div className="panel panel-default">
                            </div>
                            <label htmlFor="name">Name</label>
                            <input type="text" required className="form-control" name="name"
                                placeholder="Username"
                                onChange={this.handleNameChange}  />
                        </div><br />
                        <div>
                            <label htmlFor="email">email</label>
                            <input type="email" required className="form-control" name="email"
                                placeholder="Email"
                                onChange={this.handleEmailChange}  />
                        </div><br />
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" required className="form-control" name="password"
                                placeholder="Password"
                                onChange={this.handlePasswordChange}  />
                        </div><br />
                        <div>
                            <label htmlFor="password">Confirm Password</label>
                            <input type="password" required className="form-control" name="confirm"
                                placeholder="Confirm Password"
                                onChange={this.handleConfirmChange}  />
                        </div><br />
                        {
                            <div>
                                <button className="btn btn-primary" >Register</button>
                                <Link to="/login" > Login</Link>
                            </div>
                        }
                    </form>
                    {
                        this.props.error?
                        <div>
                                <br />
                                {
                                    // this.props.error.erros.map(error => {
                                    //    { console.log(error)}
                                    // })
                                }
                            <Alert message={"ghalat ily enta 3mlto da ya 7bibi"} type="error"/>
                        </div>
                        :
                        this.props.message?
                        <div>
                                <br />
                                <p>{this.props.message}</p>
                        </div>
                        :
                        null
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