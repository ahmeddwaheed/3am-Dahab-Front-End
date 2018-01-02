import {connect} from 'react-redux';
import UserForm from '../../Components/UserSignIn';
import {userSignInLoading, userSignIn, userSignInSuccess, userSignInFailure, setCurrentUser} from '../../Actions/UserCard';
import setAutherizationToken from './utils/setAuthrizationToken';
import jwt from 'jsonwebtoken';


const mapStateToProps = (state) => {
    return {
        message: state.userCard.user,
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
                    // console.log("HATLY EL ERROR DA", response.payload.data);
                    if(response.payload){
                        const token = response.payload.data.auth_token;  
                        localStorage.setItem('jwtToken', token);
                        setAutherizationToken(token);
                        dispatch(setCurrentUser(jwt.decode(token)));
                    }
                    if(response.payload.status < 400){
                        dispatch(userSignInSuccess(response.payload.data))
                    }
                    else {
                        dispatch(userSignInFailure(response.payload.error))
                    }
                })
            }, 1000);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserForm);