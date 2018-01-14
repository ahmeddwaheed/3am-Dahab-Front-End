import React, {Component} from 'react';
import { Spin, Alert} from 'antd';
import 'antd/lib/grid/style/index.css';
import 'antd/lib/spin/style/index.css';
import 'antd/lib/alert/style/index.css';
import { Button } from 'react-bootstrap';
import { Redirect, Router } from 'react-router'
import { Link, Route } from 'react-router-dom';
import {FormErrors} from '../FormErrors';
import history from '../../history';
import {AdminHeader} from '../../Containers/UserCardContainer/nav_bar';

export default class UserSignIn extends Component {
    constructor(){
        super()
        this.state = {
            email: "",
            password: "",
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }
    SignIn = (e) => {
        e.preventDefault();
        this.props.adminSignIn({email:this.state.email, password:this.state.password})
        this.setState({email:"", password:""});
    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
        }
        validateField(fieldName, value) {
            let fieldValidationErrors = this.state.formErrors;
            let emailValid = this.state.emailValid;
            let passwordValid = this.state.passwordValid;

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
                passwordValid: passwordValid
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
        return (
            <div>
            <AdminHeader />
                <h1> Admin Login </h1>




                    <div className = 'parent'>
                          <form  onSubmit = {this.SignIn} className="demoForm" >
                              <div className="panel panel-default">
                                  <FormErrors formErrors={this.state.formErrors} />
                              </div>
                              <div className={`group ${this.errorClass(this.state.formErrors.email)}`}>
                                  <input type="email" required className="form-control" name="email"
                                      placeholder="Email" className="inputMaterial"
                                      value={this.state.email}
                                      onChange={this.handleUserInput}  />
                                  <span className = 'highlight'></span>
                                  <span className = 'bar'></span>
                              </div>


                              <div className={`group ${this.errorClass(this.state.formErrors.password)}`}>
                                  <input type="password" className="inputMaterial" name="password"
                                      placeholder="Password"
                                      value={this.state.password}
                                      onChange={this.handleUserInput}  />
                                  <span className = 'highlight'></span>
                                  <span className = 'bar'></span>
                                  <label className = 'label' htmlFor="password">Password</label>

                              </div>
                              {
                                  <div>
                                      <button className="button" >Sign In</button>
                                      <Link to="/register" > Register</Link>
                                  </div>
                              }
                        </form>
                    </div>

                {
                    this.props.error?
                        <div>
                            <br />
                            <Alert message={this.props.error.message} type="error"/>
                        </div>
                        :
                        null
                }

            </div>
        )
    }
}
