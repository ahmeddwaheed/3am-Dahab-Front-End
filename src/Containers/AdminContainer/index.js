import {connect} from 'react-redux';
import AdminSignIn from '../../Components/AdminSignIn';
import history from '../../history';
import {adminSignIn, adminSignInSuccess, AdminSignInFailure, adminLogout} from '../../Actions/Authentication';
import setAutherizationToken from '../UserCardContainer/utils/setAuthrizationToken';

import jwt from 'jsonwebtoken';


const mapStateToProps = (state) => {
    return {
        isAdmin: state.authAdmin.isAdmin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        adminSignIn: (admin) => {
            dispatch(adminSignIn(admin)).then(response => {
                if(response.payload.status < 400){
                    const token = response.payload.data.auth_token;
                    dispatch(adminSignInSuccess(response.payload.data))
                    localStorage.setItem('jwtToken', token);
                    localStorage.setItem('isAdmin', true);
                    setAutherizationToken(token);
                    history.push('/dashboard');
                }
                else {
                  debugger
                    history.push('/admin/login');
                    var payload = JSON.parse(response.payload.request.response);
                    dispatch(AdminSignInFailure(payload))
                }
            })
        }
     }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminSignIn);
