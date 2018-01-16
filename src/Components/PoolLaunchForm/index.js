import React, { Component } from 'react';
import { Spin, Alert} from 'antd';
import {Redirect} from 'react-router-dom';
import './style.css';

export default class Form extends Component {
    componentWillMount() {
      this.props.getPool(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
      if (Object.keys(nextProps.pool).length !== 0) {
        this.state = nextProps.pool;
      }
    }

    constructor(){
      super();
      this.state = {
        launch_date: '',
        end_date: '',
        status:'running',
        redirect : false,
        current_user_in_pool:true
      }

      this._handleChange = this._handleChange.bind(this)
    }
    _handleChange(e){
      this.setState({...this.state, [e.target.name]:e.target.value})
    }
    edit = (e) => {
      e.preventDefault();
      debugger
      this.setState({status: 'running', redirect: true}, () => this.props.editPool(this.props.match.params.id, this.state));
      this.setState({
                      launch_date: '',
                      end_date: ''
                    });

    };

    render(){
        if (this.state.redirect){
         return( <Redirect to= "/dashboard"/>)
        }
        const {loading, error} = this.props;
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
        else {
          return (
  
              <div className = 'parent'>
                   <form onSubmit = {this.edit}>
  
                       <p> Pool Name {this.props.pool.name}</p>
                       <label className='date-label'> launch date </label>
                       <input className = 'input' type = "date" name="launch_date" onChange={this._handleChange}  />
                       <label className='date-label' > end date </label>
                       <input className = 'input' type = "date" name="end_date" onChange={this._handleChange}  />
  
  
                       <input className = 'button' type = "submit" value = "Launch Pool" />
                    </form>
              </div>
          )
        }
    }
}
