import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './style.css';

export default class Form extends Component {
    componentWillMount() {
      this.props.getPool(this.props.match.params.id);
        // const {name, amount, monthly_amount,seat_number} = this.props.pool.data;

    }

    componentWillReceiveProps(nextProps) {
      if (Object.keys(nextProps.pool).length !== 0) {
        const {name, amount, monthly_amount, seat_number} = nextProps.pool.data;
        this.setState({
          ...this.state,
          name,
          amount,
          monthly_amount,
          seat_number
        });
      }
    }
    constructor(){
      super();

      this.state = {
        name: '',
        amount: '',
        monthly_amount: '',
        seat_number: '',
        status:'comming',
        redirect : false,
        filled: true
      }

      this._handleChange = this._handleChange.bind(this)
    }

    _handleChange(e){
      this.setState({...this.state, [e.target.name]:e.target.value})
    }

    edit = (e) => {
      e.preventDefault();
      this.setState({ redirect: true}, () => {
        this.props.editPool(this.props.match.params.id, this.state);
        this.setState({ name:'',
                        amount: '',
                        monthly_amount: '',
                        seat_number: '',
                        status:'comming'
                     });
      });
    };

    render(){
        if (this.state.redirect){
         return( <Redirect to= "/dashboard"/>)
       }
        const { pools, loading} = this.props;
        return (
            <div className = 'parent'>
                 <form onSubmit = {this.edit}>

                     <div className = 'group'>
                        <input className = ' inputMaterial' type = "text" name="name"  onChange={this._handleChange} value={this.state.name} />
                        <span className = 'highlight'> </span>
                        <span className = 'bar'></span>
                        <label className = 'label'> Name </label>
                     </div>
                     <div className = 'group'>
                        <input className = 'inputMaterial' type = "text"  name="amount" onChange={this._handleChange} value={this.state.amount}  />
                        <span className = 'highlight'> </span>
                        <span className = 'bar'></span>
                        <label className = 'label'> amount </label>
                     </div>
                     <div className = 'group'>
                        <input className = 'inputMaterial' type = "text" name="monthly_amount" onChange={this._handleChange} value={this.state.monthly_amount} />
                        <span className = 'highlight'> </span>
                        <span className = 'bar'></span>
                        <label className = 'label'> monthly amount </label>
                     </div>
                     <div className = 'group'>
                        <input className = ' inputMaterial' type = "text" name="seat_number" onChange={this._handleChange} value={this.state.seat_number} />
                        <span className = 'highlight'> </span>
                        <span className = 'bar'></span>
                        <label className = 'label'> seats number </label>
                     </div>

                     <input className = 'button' type = "submit" value = "Edit Pool" />


                  </form>
            </div>
        )
    }
}
