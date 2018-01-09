import React, { Component } from 'react';
import {UserHeader} from '../../Containers/UserCardContainer/nav_bar';
import history from '../../history';



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
        if(user){
          return (
              <div>
              <UserHeader />
                   <form onSubmit = {this.add}>
  
                       <label> reason </label>
                       <input type = "text" name="reason"  onChange={this._handleChange} />
                       <label> background </label>
                       <input type = "text" name="background" onChange={this._handleChange} />
                       <label> program </label>
                       <input type = "text" name="program" onChange={this._handleChange} />
  
                       <input type = "submit" value = "Submit" />
                    </form>
              </div>
          )
        }
        else {
          history.push('/');
          return null
        }

    }
}



// import React, { Component } from 'react';
//
// export default class Form extends Component {
//     constructor(){
//         super();
//         this.state = {
//             pool: '',
//
//         }
//     }
//     onNameChange = (e) => {
//       const pool = e.target.value;
//       this.setState({pool} );
//     };
//
//
//     add = (e) => {
//       e.preventDefault();
//       this.props.addPool(this.state.pool);
//       this.setState({ pool: '' });
//     };
//
//     render(){
//         const { pools, loading} = this.props;
//         return (
//             <div>
//                  <form onSubmit = {this.add}>
//                      <input type = "text" value={this.state.pool} onChange={this.onNameChange} placeholder = "New Pool" />
//                      <input type = "submit" value = "Add Pool" />
//                   </form>
//             </div>
//         )
//     }
// }






//
//
// import React, { Component } from 'react';
//
//
// export default class Form extends Component {
//     constructor(){
//         super();
//         this.state = {
//             pool: '',
//
//         }
//     }
//     onNameChange = (e) => {
//       const pool = e.target.value;
//       console.log(e.target.value);
//       console.log(pool);
//       this.setState({pool} );
//       console.log(this.state);
//       console.log(pool);
//     };
//
//     add = (e) => {
//       e.preventDefault();
//       this.props.addPool(this.state.pool);
//       console.log('component add');
//       console.log(this.state);
//       this.setState({ pool: '' });
//
//     };
//
//     render(){
//         const { pools, loading} = this.props;
//         return (
//             <div>
//                  <form onSubmit = {this.add}>
//                      <input type = "text" value={this.state.pool} onChange={this.onNameChange} placeholder = "New Pool" />
//                      <input type = "submit" value = "Add Pool" />
//                   </form>
//             </div>
//         )
//     }
// }
//
