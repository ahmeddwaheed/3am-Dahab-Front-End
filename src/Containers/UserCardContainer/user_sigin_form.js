import {connect} from 'react-redux';
import UserForm from '../../Components/UserSignIn';
import history from '../../history';
import {userSignInLoading, userSignIn, userSignInSuccess, userSignInFailure, userLogout} from '../../Actions/Authentication';
import setAutherizationToken from './utils/setAuthrizationToken';
import jwt from 'jsonwebtoken';


const mapStateToProps = (state) => {
    return {
        loading: state.authUser.loading,
        error: state.authUser.error,
        isUser: state.authUser.isUser
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
                    localStorage.setItem('isUser', true);
                    setAutherizationToken(token);
                    history.push('/pools');
                }
                else {
                    // history.push('/login');
                    var payload = JSON.parse(response.payload.request.response);
                    dispatch(userSignInFailure(payload))
                }
            })
        }
     }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
