import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import PoolsPage from '../PoolsPage';
import PoolForm from '../PoolForm';
import PoolDetails from '../PoolDetails';
import UserRegisterForm from '../../Containers/UserCardContainer/user_register_form';


export default class Details extends Component {
  render (){
    return (
      <div>
        <Link to="/pools"><h2> Pools </h2></Link>
        <Route path="/pools" exact component={PoolsPage} />

        <Link to="/form">
            <h2> Add pool </h2>
        </Link>
        <Route path="/form" component={PoolForm} />

        <Link to="/register">
            <h2> Sign Up </h2>
        </Link>
        <Route path="/register" component= {UserRegisterForm} />
        
        <Route path={"/pools/:id"} component={PoolDetails} />

      </div>
    )
  }
}
