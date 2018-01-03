import {connect} from 'react-redux';
import UserForm from '../../Components/UserSignIn';
import {userSignInLoading, userSignIn, userSignInSuccess, userSignInFailure, setCurrentUser} from '../../Actions/UserCard';
import setAutherizationToken from './utils/setAuthrizationToken';
import jwt from 'jsonwebtoken';


const mapStateToProps = (state) => {
    return {
        loading: state.userCard.loading,
        error: state.userCard.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userSignIn: (user) => {
            dispatch(userSignInLoading());
            setTimeout(() => {
                dispatch(userSignIn(user)).then(response => {
                    // console.log("HATLY EL ERROR DA", response.payload.request.response);
                    if(response.payload.data){
                        const token = response.payload.data.auth_token;  
                        localStorage.setItem('jwtToken', token);
                        setAutherizationToken(token);
                        dispatch(setCurrentUser(jwt.decode(token)));
                    }
                    if(response.payload.status < 400){
                        dispatch(userSignInSuccess(response.payload.data))
                    }
                    else {
                        dispatch(userSignInFailure(response.payload.request.response))
                    }
                })
            }, 1000);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserForm);