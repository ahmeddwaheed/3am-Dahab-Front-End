import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './style.css';


export default class Form extends Component {
    constructor(){
      super();
      this.state = {
        name:'',
        amount: '',
        monthly_amount: '',
        seat_number: '',
        status:'comming',
        redirect : false
      }
      this._handleChange = this._handleChange.bind(this)
    }
    _handleChange(e){
      this.setState({...this.state, [e.target.name]:e.target.value})
    }
    add = (e) => {
      e.preventDefault();
      this.props.addPool(this.state);
      this.setState({ name:'',
                      amount: '',
                      monthly_amount: '',
                      seat_number: '',
                      status:'comming',
                      redirect: true
                   });
    };

    render(){
        if (this.state.redirect){
         return( <Redirect to= "/dashboard"/>)
        }
        const { pools, loading, isAdmin} = this.props;
        return (
          <div className = 'parent' >
                  <form onSubmit = {this.add}>
                    <div className = 'group'>
                         <input className = ' inputMaterial' type = "text" name="name" placeholder = "name" onChange={this._handleChange} />
                         <span className = 'highlight'></span>
                         <span className = 'bar'></span>
                         <label className = 'label'> Name </label>
                    </div>
                    <div className = 'group'>
                       <input className = ' inputMaterial' type = "text"  name="amount" placeholder = "amount" onChange={this._handleChange}  />
                       <span className = 'highlight'> </span>
                       <span className = 'bar'></span>
                       <label className = 'label'> amount </label>
                    </div>
                    <div className = 'group'>
                       <input className = ' inputMaterial' type = "text" name="monthly_amount" placeholder = "monthly amount" onChange={this._handleChange}/>
                       <span className = 'highlight'> </span>
                       <span className = 'bar'></span>
                       <label className = 'label'> monthly amount </label>
                    </div>
                    <div className = 'group'>
                       <input className = ' inputMaterial' type = "text" name="seat_number" placeholder = "name" placeholder = "seats number" onChange={this._handleChange}  />
                       <span className = 'highlight'> </span>
                       <span className = 'bar'></span>
                       <label className = 'label'> seats number </label>
                    </div>

                    <input className = 'button' type = "submit" value = "Create Pool" />
                  </form>
            </div>
        )
    }
}
