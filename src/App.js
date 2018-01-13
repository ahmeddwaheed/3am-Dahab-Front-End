// import React, { Component } from 'react';
// import { Link, Route } from 'react-router-dom';
// import PoolsPage from './Pages/PoolsPage';
// import PoolForm from './Containers/PoolsContainers/pool_form_container';
// import PoolDetails from './Pages/PoolDetails';
// import Requests from './Containers/RequestsContainer';
// import RequestForm from './Containers/RequestFormContainer';
// import Dashboard from './Pages/Dashboard';
// import Form from './Containers/PoolsContainers/pool_edit_container';
// import LaunchForm from './Containers/PoolsContainers/pool_launch_container';
// import UserSignInForm from './Containers/UserCardContainer/user_sigin_form';
// import UserRegisterForm from './Containers/UserCardContainer/user_register_form';
// import AdminLogin from './Containers/AdminContainer';
// import UserEditForm from './Containers/UserCardContainer/user_edit_form';
// import PoolLaunchForm from './Containers/PoolsContainers/pool_launch_container';
// import PoolEditForm from './Containers/PoolsContainers/pool_edit_container';
// import Notifications from './Containers/NotificationsContainer';
// import Footer from './Components/Footer';
//
//
// import {AdminHeader, UserHeader} from './Containers/UserCardContainer/nav_bar'
//
//
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {
//           localStorage.isAdmin?
//           <div>
//             <AdminHeader />
//
//             <Route path="/pools/:id/launch" exact component={PoolLaunchForm} />
//             <Route path="/pools/:id/edit" exact component={PoolEditForm} />
//             <Route exact path={"/dashboard"} exact component={Dashboard} />
//             <Route exact path={"/new_pool"} exact component={PoolForm} />
//           </div>
//             :
//             localStorage.isUser?
//           <div>
//             <UserHeader />
//             <Route exact path={"/pools/:id/request"} component={RequestForm} />
//             <Route exact path="/pools" exact component={PoolsPage} />
//             <Route exact path={`/profile/edit`} exact component={UserEditForm} />
//             <Route path="/notifications" exact component={Notifications} />
//             <Route path={`/pools/:id`} exact component={PoolDetails} />
//           </div>
//           :
//           ['/login', '/', '/register', '/admin/login'].includes(window.location.pathname)?
//           <div>
//             <Route exact path="/login" component= {UserSignInForm} />
//             <Route exact path="/" component= {UserSignInForm} />
//             <Route exact path="/register" component= {UserRegisterForm} />
//             <Route exact path={"/admin/login"} exact component={AdminLogin} />
//           </div>
//           :
//           <div>
//           <UserHeader />
//             <h1> Invalid Request</h1>
//             <p>If you have an account, please </p><Link to="/login"><strong>Login</strong></Link>
//             <p>If you dont have an account</p><Link to="/register"><strong> Register </strong></Link>
//           </div>
//         }
//         <Footer />
//
//       </div>
//     );
//   }
// }
//
// export default App;
//
//



import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import PoolsPage from './Pages/PoolsPage';
import PoolForm from './Containers/PoolsContainers/pool_form_container';
import PoolDetails from './Pages/PoolDetails';
import Requests from './Containers/RequestsContainer';
import RequestForm from './Containers/RequestFormContainer';
import Dashboard from './Pages/Dashboard';
import Form from './Containers/PoolsContainers/pool_edit_container';
import LaunchForm from './Containers/PoolsContainers/pool_launch_container';
import UserSignInForm from './Containers/UserCardContainer/user_sigin_form';
import UserRegisterForm from './Containers/UserCardContainer/user_register_form';
import AdminLogin from './Containers/AdminContainer';
import UserEditForm from './Containers/UserCardContainer/user_edit_form';
import PoolLaunchForm from './Containers/PoolsContainers/pool_launch_container';
import PoolEditForm from './Containers/PoolsContainers/pool_edit_container';
import Notifications from './Containers/NotificationsContainer';
import LandingPage from './Pages/LandingPage';
import Footer from './Components/Footer';
import {Redirect} from 'react-router-dom';


import {AdminHeader, UserHeader} from './Containers/UserCardContainer/nav_bar'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          localStorage.isAdmin?
          <div>
          <AdminHeader />
            <Route path="/pools/:id/launch" exact component={PoolLaunchForm} />
            <Route path="/pools/:id/edit" exact component={PoolEditForm} />
            <Route exact path={"/dashboard"} exact component={Dashboard} />
            <Route exact path={"/new_pool"} exact component={PoolForm} />
            </div>
            :
            localStorage.isUser && ['/login', '/', '/register', '/admin/login'].includes(window.location.pathname)?
            <div>
            <UserHeader />
            <Redirect to = '/pools' />
            </div>
            :
            localStorage.isUser?
            <div>
            <UserHeader />
            <Route exact path={"/pools/:id/request"} component={RequestForm} />
            <Route exact path="/pools" exact component={PoolsPage} />
            <Route exact path={`/profile/edit`} exact component={UserEditForm} />
            <Route path="/notifications" exact component={Notifications} />
            <Route path={`/pools/:id`} exact component={PoolDetails} />
          </div>
          :
          ['/login', '/', '/register', '/admin/login'].includes(window.location.pathname)?
          <div>
            <Route exact path="/login" component= {UserSignInForm} />
            <Route exact path="/" component= {LandingPage} />
            <Route exact path="/register" component= {UserRegisterForm} />
            <Route exact path={"/admin/login"} exact component={AdminLogin} />
          </div>
          :
          <div>
          <UserHeader />
            <h1> Invalid Request</h1>
            <p>If you have an account, please </p><Link to="/login"><strong>Login</strong></Link>
            <p>If you dont have an account</p><Link to="/register"><strong> Register </strong></Link>
          </div>
        }
        <Footer />

      </div>
    );
  }
}

export default App;
