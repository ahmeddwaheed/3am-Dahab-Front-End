import {connect} from 'react-redux';
import UserForm from '../../Components/UserSignUp';
import { addUserLoading, addUser, addUserSuccess, addUserFailure} from '../../Actions/UserCard';
import history from '../../history';


const mapStateToProps = (state) => {
    return {
        message: state.userCard.user.status,
        loading: state.userCard.user.loading,
        error: state.userCard.error,
        isAuthenticated: state.auth.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => {
            dispatch(addUserLoading());
            setTimeout(() => {
                dispatch(addUser(user)).then(response => {
                    if(response.payload.status < 400){
                        dispatch(addUserSuccess(response.payload.data))
                    }
                    else {
                        var payload = JSON.parse(response.payload.request.response);
                        dispatch(addUserFailure(payload))
                        history.push('/register');
                    }
                })
            }, 1000);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserForm);