import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

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
    edit = (e) => {
      e.preventDefault();
      this.setState({ redirect: true}, () => this.props.editPool(this.props.match.params.id, this.state));
      this.setState({ name:'',
                      amount: '',
                      monthly_amount: '',
                      seat_number: '',
                      status:'comming'
                   });

    };


    // edit = (e) => {
    //   e.preventDefault();
    //   this.setState({ redirect: true}, () => this.props.editPool(this.props.match.params.id, this.state));
    //   this.setState({
    //                   launch_date: '',
    //                   end_date: ''
    //                 });
    //
    // };
    // edit = (e) => {
    //   e.preventDefault();
    //   this.props.editPool(this.props.match.params.id, this.state);
    //   this.setState({ name:'',
    //                   amount: '',
    //                   monthly_amount: '',
    //                   seat_number: '',
    //                   status:'comming'
    //                });
    //
    // };

    render(){
        if (this.state.redirect){
         return( <Redirect to= "/pools/"/>)
        }

        const { pools, loading} = this.props;
        return (
            <div>
                 <form onSubmit = {this.edit}>

                     <label> Pool Name </label>
                     <input type = "text" name="name"  onChange={this._handleChange} value={this.state.name} />
                     <label> amount </label>
                     <input type = "text" name="amount" onChange={this._handleChange} value={this.state.amount} />
                     <label> monthly amount </label>
                     <input type = "text" name="monthly_amount" onChange={this._handleChange} value={this.state.monthly_amount} />
                     <label> seats number </label>
                     <input type = "text" name="seat_number" onChange={this._handleChange} value={this.state.seat_number} />

                     <input type = "submit" value = "Edit Pool" />
                  </form>
            </div>
        )
    }
}
