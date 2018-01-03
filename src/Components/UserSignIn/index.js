import React, {Component} from 'react';
import { Spin, Alert} from 'antd';
import 'antd/lib/grid/style/index.css';
import 'antd/lib/spin/style/index.css';
import 'antd/lib/alert/style/index.css';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router'
import { Link, Route } from 'react-router-dom';
import {FormErrors} from '../FormErrors';
import './Form.css';

export default class UserSignIn extends Component {
    constructor(){
        super()
        this.state = {
            email: "",
            password: "",
            formErrors: {email: '', password: '', loginError: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }
    SignIn = (e) => {
        e.preventDefault();
        this.props.userSignIn({email:this.state.email, password:this.state.password});
        this.setState({email:"", password:""});
    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                      () => { this.validateField(name, value) });
    }
    submitForm = (error) => {
        console.log('ERRORRRRRRRR => ', error);
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let loginError = this.props.error;
    
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          default: break;
    }
    
    this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid,
                        loginError: this.props.error
                      }, this.validateForm);
    }
    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }
    
    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }
    
    render(){
        const { loading , error} = this.props;
        // console.log("ERRRRRRROR",error);
        // if(loading){
        //     return (
        //         <Spin />
        //     )
        // }
        // console.log("EEEEEEEE", message);
        return (
            <div>
                <h1> Sign In </h1>
                <form  onSubmit = {this.SignIn} className="demoForm" >
                    <div className="panel panel-default">
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>
                    <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                        <label htmlFor="email">Email</label>
                        <input type="email" required className="form-control" name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleUserInput}  />
                    </div>
                    <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleUserInput}  />
                    </div>
                    {
                        <div>
                            <button onClick={this.submitForm.bind(this, this.props.error)} className="btn btn-primary" >Sign In</button>
                            <Link to="/register" > Register</Link>
                        </div>
                    }
                </form>
                
            </div>
        )
    }
}