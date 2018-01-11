import React, {Component} from 'react';
import { Spin, Alert} from 'antd';
import 'antd/lib/grid/style/index.css';
import 'antd/lib/spin/style/index.css';
import 'antd/lib/alert/style/index.css';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router'
import { Link, Route } from 'react-router-dom';
import {UserHeader} from '../../Containers/UserCardContainer/nav_bar';


export default class UserSignUp extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            avatar: ""
        }
    }
    addNewUser = () => {
        let user = new FormData();
        user.append('name',this.state.name);
        user.append('email',this.state.email);
        user.append('password',this.state.password);
        user.append('password_confirmation',this.state.password_confirmation);
        user.append('avatar',this.state.avatar);
        this.props.addUser(user);
        this.setState({name:"", email:"", password:"", password_confirmation:"", avatar:""});
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
    handleAvatarChange = (e) => {
        this.setState({avatar: e.target.files[0]})
    }
    render(){        
        const { loading , error, message } = this.props;
        
        if(loading){
            return (
                <Spin />
            )
        }
            return (
                <div>
                <UserHeader />
                    <h1> Register </h1>
                    <form className="demoForm" >
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
                        <div>
                            <label htmlFor="ImageUpload">Upload Image</label>
                            <input type="file" required className="form-control" name="image"
                            onChange={this.handleAvatarChange}/>
                        </div><br />
                        {
                            <div>
                                <button type="button" onClick={()=> this.addNewUser()} className="btn btn-primary" >Register</button>
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
                                <Alert message={this.props.message} type="success"/>
                        </div>
                        :
                        null
                    }
                    
                </div>
            )
        // }
        // else {
        //     return (
        //         <div>
        //             <h1> Invalid Request </h1>
        //         </div>
        //     )
        // }
    }
}