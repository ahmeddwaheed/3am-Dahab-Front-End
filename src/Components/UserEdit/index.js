import React, {Component} from 'react';
import { Spin, Alert} from 'antd';
import 'antd/lib/grid/style/index.css';
import 'antd/lib/spin/style/index.css';
import 'antd/lib/alert/style/index.css';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router'
import { Link, Route } from 'react-router-dom';
import {UserHeader} from '../../Containers/UserCardContainer/nav_bar';


export default class UserEdit extends Component {
    constructor(props){
        super(props)
        const {user, avatar} = this.props;
        this.state = {
            name: user.name,
            avatar: "",
            redirect: false
        };
    }
    editUser = () => {
        let user = new FormData();
        user.append('name',this.state.name);
        user.append('avatar',this.state.avatar);
        this.props.editUser(this.props.user.id, user);
        this.setState({name:"", avatar:"", redirect:true});
    }
    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }
    handleAvatarChange = (e) => {
        this.setState({avatar: e.target.files[0]})
    }
    componentWillReceiveProps(nextState){
        this.setState({name:nextState.user.name});
    }
    render(){
        const { loading , error, message, user } = this.props;
       
        return (
            <div>
            <UserHeader />
                <h1> Edit Profile </h1>
                <form className="demoForm" >
                    <div>
                        <div className="panel panel-default">
                        </div>
                        <label htmlFor="name">Name</label>
                        <input type="text" required className="form-control" name="name"
                            value={this.state.name}
                            placeholder="Username"
                            onChange={this.handleNameChange.bind(this)}  />
                    </div><br />
                    <div>
                        <label htmlFor="ImageUpload">Upload Image</label>
                        <input type="file" required className="form-control" name="image"
                        value={this.state.avatar.url}
                        onChange={this.handleAvatarChange}/>
                    </div><br />
                    {
                        <div>
                            <button type="button" onClick={()=> this.editUser()} className="btn btn-primary" >Submit</button>
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
                    this.state.redirect?
                    setTimeout(() => {
                        <Redirect to= "/pools"/>
                    }, 1000)
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