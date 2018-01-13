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
                  <div className = 'parent'>
                    <form className="demoForm" >
                        <div>

                            <div className = 'group'>
                              <input type="text" required className="inputMaterial" name="name"
                                  placeholder="Username"
                                  onChange={this.handleNameChange}  />
                              <span className = 'highlight'></span>
                              <span className = 'bar'></span>
                              <label className = 'label' htmlFor="email" >Name</label>
                            </div>
                        </div>

                        <div className = 'group'>
                            <input type="email" required className="inputMaterial" name="email"
                                placeholder="Email"
                                onChange={this.handleEmailChange}  />

                                <span className = 'highlight'></span>
                                <span className = 'bar'></span>
                                <label className = 'label' htmlFor="email" >Email</label>

                        </div>

                        <div className = 'group'>
                            <input type="password" required className="inputMaterial" name="password"
                                placeholder="Password"
                                onChange={this.handlePasswordChange}  />
                                <span className = 'highlight'></span>
                                <span className = 'bar'></span>
                                <label className = 'label' htmlFor="password" >Password</label>

                        </div>

                        <div className = 'group'>
                            <input type="password" required className="inputMaterial" name="confirm"
                                placeholder="Confirm Password"
                                onChange={this.handleConfirmChange}  />
                            <span className = 'highlight'></span>
                            <span className = 'bar'></span>
                            <label className = 'label' htmlFor="password" >Confirm Password</label>
                        </div>
                        <div className = 'group'>
                            <input type="file" required className="inputMaterial" name="image"
                            onChange={this.handleAvatarChange}/>

                            <span className = 'highlight'></span>
                            <span className = 'bar'></span>
                            <label className = 'label' htmlFor="ImageUpload">Upload Image</label>
                        </div>

                        <div >
                        </div>

                        {
                            <div>
                                <button  type="button" onClick={()=> this.addNewUser()} className="button" >Register</button>
                                <Link to="/login" > Login</Link>
                            </div>
                        }
                    </form>
                  </div>
                    {
                        this.props.error?
                        <div>
                            <Alert message={"ghalat ily enta 3mlto da ya 7bibi"} type="error"/>
                        </div>
                        :
                        this.props.message?
                        <div>

                                <Alert message={this.props.message} type="success"/>
                        </div>
                        :
                        null
                    }

                </div>
            )
    }
}
