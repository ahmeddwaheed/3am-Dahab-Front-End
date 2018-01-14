import React, { Component } from 'react';
import './style.css';


export default class Form extends Component {
  componentWillMount(){
      const {pool, getPool, match: {params: {id}}} = this.props;
  }
    constructor(props){
      super(props);
      this.state = {
        reason:'',
        background: '',
        program: '',
        user_id:'',
        pool_id: this.props.match.params.id
      }
      this._handleChange = this._handleChange.bind(this)
    }
    _handleChange(e){
      this.setState({...this.state, [e.target.name]:e.target.value})
    }
    add = (e) => {
      e.preventDefault();
      this.props.addRequest(this.state);
      this.setState({ reason:'',
                      background: '',
                      program: '',
                      user_id: this.props.user.id
                   });
    };

    render(){
        const { requests, loading, user} = this.props;
        return (
            <div className = 'parent' >
                  <form onSubmit = {this.add}>

                  <div className = 'group'>
                     <input className = ' inputMaterial' type = "text" name="reason" placeholder = 'reason'  onChange={this._handleChange}  />
                     <span className = 'highlight'> </span>
                     <span className = 'bar'></span>
                     <label className = 'label'> Reason </label>
                  </div>
                  <div className = 'group'>
                     <input className = ' inputMaterial' type = "text" name="background" placeholder = 'background' onChange={this._handleChange}  />
                     <span className = 'highlight'> </span>
                     <span className = 'bar'></span>
                     <label className = 'label'> Background </label>
                  </div>
                  <div className = 'group'>
                     <input className = ' inputMaterial' type = "text" name="program" placeholder = 'program' onChange={this._handleChange}  />
                     <span className = 'highlight'> </span>
                     <span className = 'bar'></span>
                     <label className = 'label'> Program</label>
                  </div>

                  <input  className = 'button' type = "submit" value = "Submit" />
                  </form>
            </div>
        )

    }
}
