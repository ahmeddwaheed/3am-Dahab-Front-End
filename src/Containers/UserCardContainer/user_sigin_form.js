import {connect} from 'react-redux';
import UserForm from '../../Components/UserSignIn';
import history from '../../history';
import {userSignInLoading, userSignIn, userSignInSuccess, userSignInFailure, setCurrentUser, userLogout} from '../../Actions/Authentication';
import setAutherizationToken from './utils/setAuthrizationToken';
import jwt from 'jsonwebtoken';


const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        auth: state.auth.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userSignIn: (user) => {
            dispatch(userSignInLoading());
            dispatch(userSignIn(user)).then(response => {
                if(response.payload.status < 400){
                    const token = response.payload.data.auth_token;  
                    dispatch(userSignInSuccess(response.payload.data))
                    localStorage.setItem('jwtToken', token);
                    setAutherizationToken(token);
                    history.push('/home/pools');                      
                }
                else {
                    var payload = JSON.parse(response.payload.request.response);
                    dispatch(userSignInFailure(payload))
                    history.push('/');
                }
            })
        }
     }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserForm);